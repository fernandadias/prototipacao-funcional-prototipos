// Monta um zip por protótipo: boilerplate + o protótipo.
//
// As skills do método NÃO entram aqui. Elas vivem em
// github.com/fernandadias/prototipacao-funcional-metodo e são instaladas uma
// vez em ~/.claude/skills, no nível do usuário. Empacotar uma cópia dentro de
// cada zip congelaria a versão de quem baixou, e nenhuma correção chegaria.
//
//   node scripts/montar-zips.mjs
//
// Saída em dist-zips/, prontos para anexar numa release.

import { cp, mkdir, rm, readdir } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'

const run = promisify(execFile)
const raiz = path.resolve(import.meta.dirname, '..')
const saida = path.join(raiz, 'dist-zips')

const protos = await readdir(path.join(raiz, 'prototipos'), { withFileTypes: true })
  .then(l => l.filter(d => d.isDirectory()).map(d => d.name))

await rm(saida, { recursive: true, force: true })
await mkdir(saida, { recursive: true })

for (const nome of protos) {
  const tmp = path.join(saida, nome)

  // o boilerplate é a base de todos
  await cp(path.join(raiz, 'boilerplate'), tmp, { recursive: true })

  // o protótipo por cima, podendo sobrescrever o que for dele
  await cp(path.join(raiz, 'prototipos', nome), tmp, { recursive: true, force: true })

  await run('zip', ['-qr', `${nome}.zip`, nome], { cwd: saida })
  await rm(tmp, { recursive: true, force: true })
  console.log(`  ${nome}.zip`)
}

console.log(`\n${protos.length} zips em dist-zips/`)

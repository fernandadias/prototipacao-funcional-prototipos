// Monta um zip por protótipo: boilerplate + protótipo + as sete skills.
//
// Cada zip é autocontido de propósito. O curso afirma que um protótipo é uma
// pasta na máquina do aluno, então ele não pode precisar juntar peças de dois
// lugares para começar.
//
//   node scripts/montar-zips.mjs
//
// Saída em dist-zips/, um zip por protótipo, prontos para anexar numa release.

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

  // 1. o boilerplate é a base de todos
  await cp(path.join(raiz, 'boilerplate'), tmp, { recursive: true })

  // 2. o protótipo por cima, podendo sobrescrever o que for dele
  await cp(path.join(raiz, 'prototipos', nome), tmp, { recursive: true, force: true })

  // 3. as skills e o formato, idênticos em todos os zips
  const skills = path.join(tmp, '.claude', 'skills')
  await mkdir(skills, { recursive: true })
  await cp(path.join(raiz, 'metodo', 'skills'), skills, { recursive: true })
  await cp(path.join(raiz, 'metodo', 'FORMATO.md'), path.join(skills, 'FORMATO.md'))

  await run('zip', ['-qr', `${nome}.zip`, nome], { cwd: saida })
  await rm(tmp, { recursive: true, force: true })
  console.log(`  ${nome}.zip`)
}

console.log(`\n${protos.length} zips em dist-zips/`)

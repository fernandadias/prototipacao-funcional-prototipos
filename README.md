# Prototipação Funcional · os protótipos

O projeto base e os quatro protótipos do curso [Prototipação Funcional](https://labdesignia.com.br), do Laboratório DesignIA.

As sete skills do método **não estão aqui**: elas ficam em [prototipacao-funcional-metodo](https://github.com/fernandadias/prototipacao-funcional-metodo) e são instaladas uma vez, no nível do usuário.

## Como o aluno recebe

Ele **não clona este repositório**. Baixa um zip por protótipo em [Releases](../../releases), na aula em que aquele protótipo aparece. Git só entra no curso no módulo 7, e como conteúdo.

| Protótipo | Aparece no | Chega como |
|---|---|---|
| `loja` | módulos 1, 2 e 3 | casca: layout e zero lógica |
| `academia` | módulo 4 | casca |
| `creche` | módulos 5, 7 e 8 | **pronta**, construída pelo método |
| `cinema` | módulo 6 | casca, com a declaração do mundo sem nenhuma IA |

A creche é a exceção declarada. Ela vem pronta porque o módulo 5 é sobre ler a declaração de um projeto alheio e construir só a camada de cenários em cima.

## Estrutura

```
boilerplate/        a base de todos, copiada em cada zip
  servidor/         a camada que dorme até o módulo 6
prototipos/
  loja/ academia/ creche/ cinema/
scripts/
  montar-zips.mjs   boilerplate + protótipo = um zip
```

## Por que um repositório e não quatro

Os quatro protótipos compartilham o boilerplate de verdade: a camada de servidor, a estrutura de `dados/`, a mesma configuração de projeto. Em quatro repositórios ele seria duplicado quatro vezes e desincronizaria na primeira correção, e dois zips passariam a se comportar diferente sem ninguém notar.

## Por que as skills ficam em outro repositório

Porque o ciclo de vida é oposto. Protótipo é **congelado e local**: o aluno baixa quatro vezes e cada pasta fica parada na máquina dele. Skill é **atualizável e global**: baixa uma vez, vale para todo protótipo que ele fizer depois, inclusive os do trabalho dele.

Se as skills viessem dentro de cada zip, uma correção nunca chegaria em quem já baixou, e elas pareceriam material didático descartável junto com o exercício em vez de ferramenta que sobrevive ao curso.

## Convenções

**Uma pasta por protótipo, com os mesmos arquivos.** Quem entende um, entende os quatro.

**Casca é layout.** Nenhum protótipo traz a lógica que o aluno vai escrever. Se o zip já vem funcionando, a aula perde o assunto.

**Os dados vivem em `dados/padrao/`**, um arquivo por entidade, em JSON, mais o `sessao.json`. A convenção completa está no [`FORMATO.md`](https://github.com/fernandadias/prototipacao-funcional-metodo/blob/main/FORMATO.md) do outro repositório.

**Sem travessão** em nada escrito aqui, incluindo comentário de código e mensagem de commit.

## Versionar

Uma tag por revisão, `prototipos-vN`. O workflow monta os zips e anexa na release, então corrigir um protótipo é criar uma tag e não editar um link em oito aulas.

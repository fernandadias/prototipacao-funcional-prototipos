# O método

Sete skills e um formato. O formato vem primeiro.

## `FORMATO.md`

A definição canônica da declaração: os quatro blocos, o cabeçalho de contexto, o rodapé de fora de escopo, os quatro níveis, a convenção de dados e o contrato que toda skill respeita.

**Nenhuma skill redefine nada dele.** Cada `SKILL.md` manda ler `../FORMATO.md` na primeira instrução. Se o formato divergir em sete lugares, o método passa a se contradizer dentro do próprio curso, e é o tipo de incoerência que o aluno percebe antes da instrutora.

## As sete

| Skill | O que faz | Entra no |
|---|---|---|
| `entrevista` | pergunta e escreve a declaração | módulo 2 |
| `planejamento` | lê a declaração e devolve o plano para aprovação | módulo 2 |
| `casos-de-uso` | interroga o protótipo pronto. Modo decisão e modo cobertura | módulos 4 e 5 |
| `painel` | gera o painel de controle a partir da declaração | módulo 5 |
| `roteiro-de-sessao` | propõe as tarefas e a moderação de um teste | módulo 7 |
| `handoff` | gera o documento que engenharia recebe, em HTML | módulo 8 |
| `apresentacao` | gera os slides para quem vai decidir, em HTML | módulo 8 |

São sete e não oito: a cobertura de cenários é o **segundo modo** da `casos-de-uso`, não uma skill própria. Entrada igual, saída igual, só a lente muda. E vira aula melhor, porque abrir um `SKILL.md` e ver dois modos escritos lá dentro comprova o que o curso afirma desde o começo, que skill é arquivo que se lê e se mexe.

## O que todas têm em comum

**Leem `FORMATO.md` antes de agir.**

**Declaram o que entenderam e esperam confirmação.** "Entendi que o estado fechando é novo e que essas duas regras não existem no código, confirma?" Nada acontece sem a pessoa confirmar. É o que faz a designer continuar sendo quem decide.

**São disparadas pela designer, nunca sozinhas pelo agente.** Isso dispensa a separação entre skill de usuário e skill de modelo.

**Vão para o protótipo como arquivo comum**, que o aluno abre e edita, não como pacote gerenciado que atualiza sozinho. Isso é coerência e não preferência: o curso inteiro defende que a declaração é um arquivo que você lê e mexe, e se a skill que escreve essa declaração for caixa preta, o método vira mágica no lugar mais importante.

**Duas têm dois modos**, do zero e de acréscimo: `entrevista` e `planejamento`. Nos dois casos é requisito de origem e não melhoria futura, porque sem eles qualquer alteração numa declaração existente devolve um projeto novo.

## Ordem de construção

```
0. FORMATO.md
1. boilerplate + painel     ← antes de gravar qualquer aula
2. entrevista
3. planejamento
4. casos-de-uso, modo decisão
5. casos-de-uso, modo cobertura
6. roteiro-de-sessao
7. handoff, depois apresentacao   (compartilham CSS)
```

O painel sai de ordem de propósito. Ele só aparece no módulo 5, mas é o **teste de suficiência do formato**: se um painel genérico se monta sozinho lendo o `declaracao.md`, o formato está bom. Se não se monta, falta informação, e é mais barato descobrir isso agora do que depois de gravar oito módulos.

## Onde elas vivem no protótipo

```
minha-creche/
  declaracao.md
  .claude/skills/
    FORMATO.md
    entrevista/SKILL.md
    planejamento/SKILL.md
    ...
```

`FORMATO.md` fica ao lado das pastas de skill, e é por isso que cada uma o referencia como `../FORMATO.md`.

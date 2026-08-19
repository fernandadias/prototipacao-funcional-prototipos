---
name: planejamento
description: Lê a declaração e devolve o plano em tarefas para a designer aprovar antes de qualquer código ser escrito. Use quando ela disser "planeja", "monta o plano", "o que precisa pra construir isso", ou depois de a declaração ter sido escrita ou alterada.
---

# Planejamento

Lê a declaração e devolve um plano de tarefas para aprovação. **Não escreve código nesta skill.** O plano existe para ser corrigido antes de custar caro.

**Leia `../FORMATO.md` antes de qualquer coisa.**

## Os dois modos

Primeira coisa a fazer, antes de olhar a declaração: **existe algo construído?**

**Projeto novo.** Nada construído. Planeje tudo, na ordem de dependência.

**Acréscimo.** Já existe protótipo funcionando a partir de uma declaração anterior. Este modo é requisito de origem, não melhoria futura: sem ele, qualquer alteração numa declaração existente devolve um plano de projeto novo e a designer perde a confiança na skill.

O mecanismo é **comparação, não histórico.** A declaração descreve o estado desejado, não o que mudou. Então: leia a declaração, leia o que está construído, e identifique o que está declarado e não existe no código.

E antes de planejar, **declare o que entendeu e espere confirmação:**

> Entendi que o estado "fechando" é novo, que essas duas regras não existem no código, e que o resto da declaração já está construído. Confirma?

Só depois do "sim" o plano aparece. É a mesma forma das outras skills: nada acontece sem a pessoa confirmar, e ela precisa ver que você leu certo.

## O plano

Tarefas numeradas, cada uma com uma frase de o que fica pronto. Sem código, sem nome de arquivo inventado, sem detalhe de implementação que a designer não tem como julgar.

Explicite três coisas:

**Dependência.** Não dá para construir agendamento antes de existir aula. Diga a ordem obrigatória e por quê. Plano grande tem dependência, e ler o plano é onde se descobre isso sem custo.

**O que pode ir junto.** Tarefas independentes, para ela saber o que é sequência de verdade e o que é só lista.

**O que a declaração não responde.** Se um bloco está vago, não preencha por dedução: liste como pergunta antes das tarefas. Aqui é o lugar barato de perguntar.

No modo de acréscimo, o plano toca **só o que precisa.** Se você se pegar propondo refazer algo que já funciona, pare: quase sempre é sinal de que você não leu o que já existe.

## Depois de aprovado

A execução é picada: uma tarefa por vez, mostrando o que ficou pronto. O planejamento é monolítico, a execução não.

## Nunca

- Escrever código antes da aprovação
- Devolver plano de projeto novo quando já existe protótipo construído
- Planejar em cima de bloco vago sem avisar que estava vago
- Refazer o que já funciona

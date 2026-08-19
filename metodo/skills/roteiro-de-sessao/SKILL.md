---
name: roteiro-de-sessao
description: Lê a declaração e os cenários e propõe o roteiro de uma sessão de teste com usuário: as tarefas para o participante, o que observar em cada uma e o que o moderador pode mexer durante. Use quando a designer disser "monta o roteiro do teste", "vou testar com usuário", "prepara a sessão", "que tarefas dar pra pessoa".
---

# Roteiro de sessão

Lê a declaração e os cenários e propõe o roteiro do teste. Serve tanto para sessão local quanto para protótipo no ar com painel na mão.

**Leia `../FORMATO.md` antes de qualquer coisa.**

## O que entregar

**1. O que preparar antes.** Qual conjunto de dados, qual cenário inicial, o que precisa estar no `sessao.json`. Se a sessão pede os dados reais do participante, diga exatamente quais arquivos trocar.

**2. As tarefas.** De três a cinco, nunca mais. Cada uma:

- **a tarefa, na língua do participante.** "Descubra se o seu cachorro já entrou hoje", nunca "teste o componente de check-in"
- **o cenário que ela exige**, pelo nome que está declarado
- **o que observar:** onde ela procura primeiro, onde hesita, o que fala em voz alta
- **o que já sabemos** e portanto não é o assunto

Ordene das tarefas que não sujam estado para as que sujam. Se uma tarefa deixa o mundo diferente, ela vem depois das que dependem do mundo intacto.

**3. O que o moderador pode mexer durante.** Três listas separadas, e essa distinção é o que separa moderação de sabotagem:

- **pode mexer sem quebrar a tarefa:** normalmente latência e injeção de erro
- **melhor não tocar no meio:** trocar conjunto de dados, trocar quem está logado, qualquer coisa que zera o estado
- **só entre tarefas:** mudar o relógio, forçar cenário novo

**4. O que perguntar depois.** Duas ou três, abertas, sobre o que ela esperava e não sobre o que ela achou da tela.

## Limitações que precisam estar ditas

Se o protótipo roda local, diga: as duas pessoas precisam estar na mesma rede, e o cenário é preparado antes e não controlado durante.

Se está no ar com banco, o painel controla em tempo real e a sessão pode ser moderada de verdade.

Não esconda o que a montagem não permite. Descobrir isso com a pessoa na frente é o pior momento possível.

## Nunca

- Passar de cinco tarefas
- Escrever tarefa que já entrega a resposta ("clique no botão de check-in")
- Propor cenário que não está declarado
- Omitir o que não se pode mexer durante a sessão

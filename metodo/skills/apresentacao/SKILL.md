---
name: apresentacao
description: Gera a apresentação em slides HTML a partir da declaração e do protótipo, para quem vai decidir. Use quando a designer disser "monta a apresentação", "preciso apresentar isso", "slides disso", "vou levar pra liderança".
---

# Apresentação

Mesma fonte que o handoff, público diferente. **Handoff é para quem vai construir, apresentação é para quem vai decidir.**

**Leia `../FORMATO.md` antes de qualquer coisa.**

## As seções

**1. O problema.** Uma frase, do contexto da declaração. Sem tour de produto.

**2. O que foi decidido, e por quê.** As decisões que importam, não todas. Escolha as de zona cinzenta, que são as que alguém pode questionar na reunião.

**3. O que o protótipo revelou.** A parte que só existe porque havia algo rodando: a tela que ninguém teria desenhado, o caso que apareceu quando o relógio virou, o layout que quebrou com nome de verdade. É o argumento mais forte do documento e merece o meio da apresentação.

**4. O que ficou de fora.** Do rodapé da declaração, com os motivos. Aqui vira força e não confissão: decidir não fazer é decisão.

**5. O que vem depois.** As perguntas abertas e o que se precisa de quem está na sala.

## O formato

HTML em slides, num arquivo só, **sem nenhuma dependência externa**. `scroll-snap` na vertical mais navegação por seta do teclado. Nada por CDN, por dois motivos: o dia em que a CDN estiver fora ela está na frente de um diretor, e ela precisa conseguir mudar uma frase de um slide sem entender uma biblioteca.

Um slide, uma ideia. Se um slide precisa de parágrafo, ele é dois slides.

**CSS compartilhado com o handoff.**

## Não referencie posição

Sem "slide 3 de 12", sem numeração de módulo ou aula se o assunto for o curso. Vale a mesma regra do resto: referência posicional envelhece.

## Nunca

- Repetir o handoff. Se está virando spec, você errou o público
- Inventar o que o protótipo revelou. Se a declaração e os cenários não sustentam, pergunte
- Colocar tabela de propriedade e tipo num slide. Isso é handoff

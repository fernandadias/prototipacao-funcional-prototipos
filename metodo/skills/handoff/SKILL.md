---
name: handoff
description: Gera o documento de handoff em HTML a partir da declaração e do protótipo, para engenharia receber. Inclui entidades, estados, regras de negócio, cenários cobertos e o que não deve ser copiado. Use quando a designer disser "gera o handoff", "documento pra engenharia", "spec disso", "passa isso pro time".
---

# Handoff

Lê a declaração e o protótipo e gera o documento que engenharia recebe. Saída em HTML, num arquivo só.

**Leia `../FORMATO.md` antes de qualquer coisa.**

A spec de regras de negócio **é uma seção deste documento**, não um documento separado. Separar geraria duas fontes para a mesma informação, que é justamente o que o método existe para evitar.

## As seções

**1. O que é.** O contexto da declaração, em três linhas. Quem usa e o que vem fazer.

**2. Entidades e propriedades.** Direto da declaração, com tipo. Marque quais mudam.

**3. Estados e transições.** O que muda e o que faz mudar.

**4. Regras de negócio.** A parte que engenharia mais precisa e que Figma nenhum entrega. Frase por frase, com a precedência explícita quando existir.

**5. Cenários cobertos.** O que o protótipo sabe fazer, e o link para abrir e clicar. Um protótipo que roda vale mais que qualquer descrição dele.

**6. Fora de escopo.** Direto do rodapé da declaração, com os motivos.

**7. O que não copiar.** A seção mais importante, e a única que existe porque protótipo funcional é diferente de Figma. Preencha o que você sabe e **marque como pendente o que só a designer pode escrever**:

- dados falsos, e onde eles estão
- ausência de autenticação
- regras simplificadas para caber no protótipo
- decisão tomada por conveniência de construção e não por design
- qualquer coisa que existe para o protótipo funcionar e não para o produto existir

**8. Decisões e perguntas abertas.** Espaço para o que só a designer escreve: por que cada decisão de zona cinzenta foi tomada daquele jeito, e o que continua aberto para o time responder. Não invente conteúdo aqui. Deixe o espaço marcado e diga a ela que essa parte é dela.

## O HTML

Um arquivo, sem dependência externa, sem CDN. **Compartilha o CSS com a skill de apresentação:** as duas saem da mesma declaração e é bom que pareçam irmãs, porque isso reforça em quem recebe que a fonte é a mesma.

Legível impresso e legível no celular. Alguém vai abrir isso numa reunião.

## Nunca

- Gerar spec de regras como documento separado
- Preencher "decisões e perguntas abertas" por dedução
- Omitir a seção do que não copiar, mesmo quando o protótipo parece limpo
- Descrever tela. Engenharia não precisa de tela bonita, precisa de regra

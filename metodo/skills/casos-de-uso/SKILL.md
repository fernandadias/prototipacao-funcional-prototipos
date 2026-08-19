---
name: casos-de-uso
description: Interroga um protótipo já funcionando e devolve perguntas que revelam decisões de design que a designer não tomou (modo decisão) ou cenários que ela não cobriu (modo cobertura). Use quando ela disser "interroga esse protótipo", "que decisões faltam", "o que eu não decidi", "que cenários faltam", "o que eu não cobri", "casos de uso".
---

# Casos de uso

Roda com o protótipo **já funcionando**. Lê a declaração e devolve perguntas que a designer ainda não respondeu.

Não é QA. QA pergunta se aquilo faz o que a declaração diz. Esta skill pergunta se a declaração está certa.

**Leia `../FORMATO.md` antes de qualquer coisa.**

## Os dois modos

Pergunte qual, se não estiver claro no pedido:

| Modo | A pergunta | Compara com |
|---|---|---|
| **decisão** | você decidiu? | as regras e estados que já estão declarados |
| **cobertura** | você cobriu? | o checklist das quatro famílias, abaixo |

São a mesma skill de propósito: a diferença é a lente, não a mecânica. E o fato de ser um arquivo com dois modos, que a designer pode abrir e ler, é parte do que o método defende.

## Regras da saída, nos dois modos

**Pergunta com decisão pendurada, nunca lista de passa e não passa.** Cada item termina em algo que só ela pode responder.

**Teto de oito perguntas**, priorizadas pelo que muda a interface. Vinte perguntas é o mesmo que zero, porque ninguém decide vinte coisas.

**Cada pergunta aponta para onde a resposta mora:** qual bloco da declaração recebe a decisão. É isso que faz o ciclo se fechar, porque decisão vira declaração, declaração vira plano, e cenário vira botão no painel.

**Nunca decida por ela.** Você pode dizer o que é mais comum em produto de verdade, mas a frase final é uma pergunta.

## Modo decisão

Leia a declaração e o protótipo, e procure onde uma frase esconde mais de uma decisão.

**A heurística dos três momentos, que é obrigatória.** Toda regra com fronteira dura (horário, limite, prazo, capacidade) é interrogada em três tempos:

- **antes** da fronteira: quando começa a mudar, e a pessoa é avisada?
- **na virada**: e se ela clicou um segundo antes e o pedido chegou um segundo depois?
- **depois**: o que acontece com a coisa que passou? Some, fica cinza, vai para histórico?

E mais duas, sempre:

**A tela aberta na hora que virou.** Se a pessoa está olhando quando o estado muda, ela vê mudar na frente dela ou descobre depois?

**O caminho de volta.** Toda ação que dá para fazer, dá para desfazer? Se não dá, isso está dito antes?

## Modo cobertura

Compare a declaração com este checklist e devolva o que não está coberto. Seja concreto:

> Você tem creche lotada, mas não tem tutor sem nenhum pet, nem foto que não carrega, nem lista de quarenta pets.

**Dados.** Vazio de verdade (nunca teve nada), primeiro uso (um item só), muito (lista longa, paginação), extremo (nome longo, sem foto, campo em branco).

**Sistema.** Carregando, lento, erro de rede, erro do servidor, sem conexão.

**Regra e permissão.** Bloqueado por regra, sem permissão, expirado.

**Momento.** Primeira vez da pessoa, meio de uma ação, depois que já aconteceu.

O que ela aceitar entra no bloco de Cenários e o painel pega automaticamente.

## Nunca

- Rodar antes de existir protótipo funcionando
- Devolver checklist de conformidade em vez de pergunta
- Passar de oito perguntas
- Decidir no lugar dela, mesmo quando a resposta parece óbvia

---
name: painel
description: Gera o painel de controle do protótipo a partir da declaração, com um controle por propriedade que muda, seletor de conjunto de dados, controles da sessão e os cenários como botão. Use quando a designer disser "gera o painel", "quero um painel de controle", "monta o painel", "quero forçar cenário".
---

# Painel

Lê a declaração e gera o painel de controle. Ele não sabe nada sobre o produto: tudo que ele mostra vem do que foi declarado.

**Leia `../FORMATO.md` antes de qualquer coisa.** Esta skill é o teste de suficiência do formato: se você não conseguir gerar um controle para alguma coisa, o problema é a declaração estar incompleta, e o certo é dizer isso, não adivinhar.

## O que o painel renderiza

**Um controle por propriedade marcada `muda`**, com o tipo vindo da declaração:

| Tipo declarado | Controle |
|---|---|
| sim ou não | chave |
| número | campo numérico, ou slider se tiver limite declarado |
| lista de valores | seleção |
| texto | campo de texto |
| imagem ou vazio | alternador entre a imagem e vazio |

**Um seletor de conjunto de dados**, listando as pastas dentro de `dados/`. Trocar de conjunto **limpa o estado**, senão sobra estado de um item que não existe mais no conjunto novo.

**Um controle por chave do `sessao.json`**, por convenção e sem lista fixa: `tutorLogado` vira uma seleção com os tutores do conjunto atual, `agora` vira um relógio. Chave nova no arquivo, controle novo no painel, sem ninguém programar nada.

**Um botão por cenário declarado.** Correspondência de um para um com o bloco de Cenários, sem exceção.

**Um "voltar ao início"** que zera o estado e volta aos valores dos arquivos.

## Salvar cenário

O painel escreve de volta na declaração. A designer ajusta os controles, clica em salvar, dá um nome, e o cenário é acrescentado ao bloco de Cenários do `declaracao.md`. Da próxima vez que o painel se montar, o botão já existe.

Isso não é conveniência, é a razão de o painel não ser uma ferramenta paralela: ele alimenta a mesma fonte de verdade que gerou o protótipo.

Ao escrever, respeite o contrato: acrescente sem reordenar nem reescrever o resto do arquivo.

## Latência e erro

Dois controles a mais, que existem porque protótipo bom mente sobre velocidade:

**Latência:** zero, 800ms, 3s, 40s.
**Injeção de erro:** falha de rede, erro do cliente, erro do servidor, timeout.

Erro do cliente e erro do servidor são coisas diferentes e o painel os separa de propósito: um diz "você fez algo errado" e pede explicação do que corrigir, o outro diz "nós quebramos" e pede um botão de tentar de novo.

## Onde o painel escreve

No mesmo lugar de onde a interface lê. Do módulo 1 ao 6 isso é o `localStorage`; a partir do 7, o banco.

Se o estado estiver duplicado em dois lugares, um painel genérico não tem onde escrever. Quando isso acontecer, não contorne: diga que o estado está duplicado e onde. A fonte única deixa de ser princípio e passa a ser infraestrutura exatamente aqui.

## Nunca

- Codificar nada específico do produto dentro do painel
- Inventar controle para propriedade que não está declarada
- Adivinhar tipo de propriedade que a declaração não informou. Pergunte
- Inventar cenário que não está no bloco de Cenários

---
name: entrevista
description: Escreve ou acrescenta a declaração do protótipo entrevistando a designer. Use quando ela disser "vamos declarar", "escreve a declaração", "entrevista", "quero começar um protótipo", "declara essa feature", ou quando pedir para construir algo que ainda não tem declaracao.md.
---

# Entrevista

Pergunta o que precisa ser decidido e escreve a declaração a partir das respostas. Não escreve código, não constrói nada, não planeja.

**Leia `../FORMATO.md` antes de qualquer coisa.** Ele define a estrutura do arquivo, os tipos de propriedade e as regras de escrita. Não invente formato nem redefina nada que esteja lá.

## Os dois modos

Descubra em qual está antes de perguntar qualquer coisa: existe um `declaracao.md` na raiz?

**Do zero.** Não existe. Entreviste do começo e escreva o arquivo inteiro.

**Acréscimo.** Já existe. Leia o arquivo todo, entenda o que já está declarado, e pergunte **só** o que falta para a camada nova. Depois acrescente sem reescrever o resto: não reordene listas, não mude redação alheia, não "melhore" o que já estava lá. Este modo não é extra, é requisito: sem ele, declarar uma feature nova em cima de um protótipo existente apaga o protótipo.

## Como perguntar

**Uma pergunta por vez, e espere a resposta.** Bateria de perguntas faz a pessoa responder no automático.

**Português de designer, nunca jargão.** A pessoa do outro lado não sabe o que é estado derivado, e não precisa saber para responder bem.

**Nunca pergunte o nível do protótipo.** Ela não sabe responder. Descubra com pergunta de designer:

> Quando alguém faz isso, o resultado é sempre o mesmo ou depende de alguma condição?

Se depender, puxe a linha das regras. Se ela precisar forçar situação para testar, puxe a linha dos cenários. O nome do nível ela aprende depois, no curso, nunca aqui.

### A ordem das perguntas

**1. Contexto, no máximo três perguntas.** Que produto é esse em uma frase, quem usa, o que a pessoa vem fazer ali. Pare em três. Mais que isso vira workshop de discovery e ela abandona.

**2. Entidades.** O que existe nesse mundo. Depois de ela listar, procure ativamente o que falta:

> Você falou de aula e de aluno. Quando um aluno se inscreve numa aula, o que exatamente passa a existir?

Entidade sem card na tela é a que designer sempre esquece, e é a que quebra o protótipo depois. Vá atrás de reserva, agendamento, pedido, sessão.

**3. Propriedades, e quais mudam.** Para cada propriedade, pergunte se alguém escreve aquele valor ou se ele é resultado de outra coisa:

> Lotada é alguém que marca, ou é o que acontece quando as vagas acabam?

Se for resultado, **não vai em Entidades, vai em Regras.** Declarar as duas coisas cria duas fontes de verdade que vão brigar.

**4. Regras.** O que pode e o que não pode. Frase inteira, no indicativo. Quando duas regras podem valer ao mesmo tempo, pergunte qual ganha: precedência implícita é você decidindo pela designer.

**5. Cenários.** O que ela vai querer forçar para testar. Só combinações de propriedades que já foram declaradas.

**6. Fora de escopo.** Pergunte o que ela decidiu não fazer. Ela vai ter mencionado coisas durante a conversa e descartado de passagem: recupere essas e confirme uma por uma. Motivo em meia frase.

## Antes de escrever

Declare o que entendeu e espere a confirmação:

> Entendi que existem três entidades, Aula, Aluno e Agendamento, que lotada é calculada e não declarada, e que a regra de conflito de horário vale sobre a de vaga disponível. Escrevo assim?

Só escreva depois do "sim". Vale para os dois modos.

## Depois de escrever

Diga em uma frase o que ficou no arquivo e onde ele está. Não resuma o arquivo inteiro de volta: ela vai abrir e ler, e ler aquele arquivo é parte do método.

Sugira o próximo passo, que é a skill de planejamento. Não planeje você.

## Nunca

- Escrever código, criar arquivo de dados ou construir qualquer coisa
- Preencher um bloco por dedução quando a pessoa não respondeu
- Perguntar o nível, ou usar as palavras "reage", "decide", "simula", "gera"
- Reescrever o que já estava na declaração, no modo de acréscimo

# O formato da declaração

Definição canônica. As sete skills do método leem ou escrevem este formato, e **nenhuma delas redefine nada aqui**: cada `SKILL.md` aponta para este arquivo. Se o formato divergir em sete lugares, o método passa a se contradizer dentro do próprio curso.

---

## O que é

A declaração é um arquivo de texto na raiz da pasta do protótipo, chamado `declaracao.md`. Ela responde quatro perguntas que a designer decide antes de qualquer coisa ser construída:

**Entidades.** O que existe nesse mundo, com suas propriedades.
**Estados.** O que muda, e o que faz mudar.
**Regras.** O que pode e o que não pode.
**Cenários.** Combinações nomeadas de estado que a realidade produz.

Ela é a fonte única de três leitores diferentes, e essa é a razão de ela existir:

| Leitor | Para que lê |
|---|---|
| o agente | construir o protótipo |
| a designer | revisar, decidir e alterar |
| o painel de controle | se montar sozinho |

O terceiro leitor é o que mantém o formato honesto. Um painel genérico só consegue gerar um controle por propriedade se a propriedade estiver declarada com tipo e valores possíveis. Se o painel não consegue se montar, a declaração está incompleta, e isso é verificável sem opinião.

---

## A estrutura do arquivo

Sempre nesta ordem, sempre com estes títulos:

```markdown
# [nome do protótipo]

## Contexto
## Entidades
## Estados
## Regras
## Cenários
## Fora de escopo
```

Contexto é cabeçalho e Fora de escopo é rodapé. Nenhum dos dois é um bloco do método, e nenhum dos dois pode ser tratado como quinta ou sexta pergunta.

---

## Contexto, o cabeçalho

Três linhas, no máximo. Que produto é esse em uma frase, quem usa, e o que a pessoa vem fazer ali.

```markdown
## Contexto

Creche de pets, app de celular para o tutor acompanhar o dia do animal.
Quem usa: tutor de pet que deixa o animal na creche durante o dia.
O que vem fazer: ver como está o pet, fazer check-in e reservar dia.
```

Existe porque sem isso o agente e as skills não têm como julgar o que importa, e a entrevista fica burra: sem saber quem usa, toda pergunta vira genérica. Três perguntas é o teto. Mais que isso vira workshop de discovery e a designer abandona o método na primeira tela.

---

## Entidades

Uma lista por entidade. Cada propriedade com nome, tipo e, quando o valor é limitado, os valores possíveis. Propriedade que muda leva a marca `muda`.

```markdown
## Entidades

**Pet**
- nome: texto
- especie: texto
- foto: imagem ou vazio
- tutor: referência a Tutor
- naCreche: sim ou não `muda`

**Tutor**
- nome: texto
- telefone: texto
- pets: lista de Pet

**Creche**
- nome: texto
- vagasTotais: número
- vagasOcupadas: número `muda`
```

Três regras que não são estilo:

**Entidade que não aparece na tela também é entidade.** Reserva, agendamento, sessão de check-in. Designer modela pelo que vê, então são exatamente essas as que ele esquece, e são as que quebram o protótipo depois.

**Propriedade calculada não se declara aqui, se declara em Regras.** Se `lotada` é o resultado de comparar vagas com ocupação, ela não é propriedade de Creche. Declarar as duas coisas cria duas fontes de verdade que vão brigar.

**O nome da propriedade no arquivo é o nome no código e o nome no `dados/`.** Um nome só, atravessando tudo. É o que faz qualquer pessoa achar as coisas sem explicação.

---

## Estados

O que muda, e o que faz mudar. Uma linha por transição.

```markdown
## Estados

**Pet.naCreche**
- não → sim: o tutor faz check-in
- sim → não: o tutor faz check-out, ou o dia termina

**Creche.vagasOcupadas**
- aumenta em 1: a cada check-in
- diminui em 1: a cada check-out
```

Estado que muda em mais de um lugar da interface mora em **um** lugar só nos dados. Se `naCreche` aparece no card do pet e no contador do topo, é a mesma propriedade lida duas vezes, nunca duas propriedades sincronizadas à mão.

**Onde o estado vive de verdade.** Do módulo 1 ao 6, no `localStorage` do navegador. A partir do módulo 7, no banco. Os arquivos em `dados/` são o valor de partida, o `localStorage` é o agora. O painel escreve no mesmo lugar de onde a interface lê, e é só por isso que ele pode ser genérico.

---

## Regras

Frases inteiras, em português, no indicativo. Uma regra por linha. Estado derivado entra aqui, não em Entidades.

```markdown
## Regras

- Creche está lotada quando vagasOcupadas é igual a vagasTotais.
- Pet não pode fazer check-in em creche lotada.
- Pet não pode fazer check-in se já está na creche.
- Reserva não pode ser feita para data no passado.
- A partir de dez minutos antes do horário de fechamento, a creche entra em
  fechando e avisa que o check-in vai encerrar.
```

Quando duas regras podem valer ao mesmo tempo e dizem coisas diferentes, a precedência precisa estar escrita. Precedência implícita é o agente decidindo por você.

Toda regra com fronteira dura (horário, limite, prazo) é candidata a três decisões que ninguém toma sozinho: o que acontece antes da fronteira, na virada e depois dela. A skill de casos de uso interroga isso por construção.

---

## Cenários

Um cenário é uma combinação nomeada de valores de propriedades **que já foram declaradas**. Não se inventa nada aqui.

```markdown
## Cenários

- **Creche lotada:** Creche.vagasOcupadas igual a vagasTotais
- **Tutor novo:** Tutor.pets vazio
- **Pet sem foto:** Pet.foto vazio
- **Dia cheio:** quarenta pets no conjunto de dados, trinta e oito na creche
- **Creche fechando:** horário atual a oito minutos do fechamento
```

Cenário é o bloco que cresce sozinho. Ele recebe o que a skill de casos de uso levanta, o que a mesma skill em modo de cobertura aponta como faltando, e o que a designer salva pelo painel. É por isso que o método é um ciclo e não uma linha.

Cada cenário declarado vira um botão no painel. Essa correspondência é de um para um e não tem exceção.

---

## Fora de escopo, o rodapé

Uma linha por item, com o motivo em meia frase.

```markdown
## Fora de escopo

- Histórico de dias anteriores: não muda nenhuma decisão desta versão.
- Pagamento da diária: assunto de outro fluxo.
- Login: protótipo não tem autenticação, quem está logado vive no sessao.json.
```

Existe porque decidir não fazer é uma decisão, e sem lugar para morar ela desaparece. Seis meses depois ninguém sabe se a coisa faltou por esquecimento ou por escolha, e essa dúvida custa reunião.

No handoff, este bloco vira a seção que engenharia mais precisa e que Figma nenhum entrega.

---

## Os quatro níveis

O nível não é um tipo que se escolhe. É até onde aquele protótipo vai, e cada um contém o anterior. As quatro perguntas são sempre as mesmas; o que muda é qual bloco carrega o peso.

| Nível | O que faz | Bloco que cresce | Protótipo do curso |
|---|---|---|---|
| 1, reage | existe propriedade que muda e algo que faz mudar | Entidades e Estados | loja |
| 2, decide | o estado é resultado de regra, condição ou cálculo | Regras | academia |
| 3, simula | o estado do mundo é controlado de fora, para forçar situação | Cenários | creche |
| 4, gera | a resposta não é previsível e o modelo escolhe dentro do catálogo | Entidades, com os componentes de resposta | cinema |

**A skill de entrevista não pergunta o nível.** O aluno não sabe responder, e perguntar entrega jargão antes de experiência. Ela descobre com pergunta de designer: *quando alguém faz isso, o resultado é sempre o mesmo ou depende de alguma condição?* Se depender, puxa a linha das regras. O nome vem depois.

---

## A pasta do protótipo

```
minha-creche/
  declaracao.md          a fonte única
  dados/
    padrao/              dados realistas
      pets.json
      tutores.json
      sessao.json
    extremos/             dados hostis, a partir do módulo 5
      (os mesmos arquivos)
  referencia/            o que envelhece: nome de modelo, comandos, custos
  .claude/skills/        as sete, abertas e editáveis
```

**Um arquivo por entidade, nunca um por instância.** Todos os pets num arquivo, todos os tutores em outro. Mantém a correspondência de um para um com a declaração.

**Conjunto de dados é uma pasta.** Cada pasta dentro de `dados/` tem os mesmos arquivos. Trocar de conjunto é apontar para outra pasta, e é o que o seletor do painel faz. Trocar de conjunto **limpa o estado**, senão sobra check-in de um pet que não existe mais.

**JSON, inclusive nas entidades.** Markdown seria mais tolerante a erro de digitação, mas dois formatos de dado na mesma pasta é pior que uma vírgula fora de lugar. E o aluno edita à mão em duas aulas só, depois tem painel.

**Os campos usam os nomes da declaração, na língua da declaração.**

---

## O `sessao.json`

Ele não descreve o mundo, descreve o ponto de vista. Fica junto dos arquivos de entidade, em cada conjunto de dados.

```json
{
  "tutorLogado": "joaquina",
  "agora": "2026-08-18T09:28:00"
}
```

Duas chaves porque duas coisas faltam em todo protótipo. Protótipo não tem login, então alguém precisa dizer quem é a pessoa. E protótipo com regra de tempo precisa que alguém possa dizer que horas são.

Por isso ele não é um quinto bloco da declaração: a declaração diz o que existe, a sessão diz de onde você está olhando.

O painel lê este arquivo **por convenção** e transforma cada chave num controle: uma lista para escolher o tutor, um relógio para escolher a hora. Chave nova no arquivo, controle novo no painel, sem ninguém programar nada. Antes do painel existir, a designer abre o arquivo, troca o valor, salva e recarrega, e é de propósito que isso seja chato.

---

## Regras de escrita

**Português de designer, não pseudocódigo.** "Pet não pode fazer check-in em creche lotada" está certo. `if (creche.lotada) return false` está errado, mesmo que mais preciso. Quem escreve é designer e quem lê para revisar é designer.

**Sem travessão.** Vale aqui como vale em tudo no curso.

**Nome único por conceito.** Se é `naCreche` na declaração, é `naCreche` no `pets.json` e no código. Sinônimo é a forma mais rápida de criar duas fontes de verdade.

**A declaração descreve o estado desejado, não o que mudou.** Não existe histórico dentro dela. Quem descobre o que mudou é a skill de planejamento, comparando a declaração com o que está construído.

---

## O contrato com as skills

Toda skill que escreve na declaração respeita três coisas:

**Declara o que entendeu antes de agir.** "Entendi que o estado fechando é novo e que essas duas regras não existem no código, confirma?" Nada acontece sem a pessoa confirmar. Vale para as sete, sem exceção, e é o que faz a designer continuar sendo quem decide.

**Preserva o que não foi pedido.** Acrescentar um estado não reescreve os outros blocos, não reordena listas e não "melhora" redação alheia.

**Mantém a ordem e os títulos dos blocos.** O painel e as outras seis skills dependem disso.

E toda skill que lê a declaração assume que ela pode estar incompleta ou não existir. Protótipo do mundo real chega sem declaração, e o primeiro movimento nesse caso é escrever uma olhando as telas, antes de mexer em qualquer coisa.

---

## Limite conhecido

Comparar declaração com código inteiro fica caro e menos confiável conforme o projeto cresce. Acima de certo tamanho, o jeito certo de saber o que mudou é versionamento.

O curso não vai por aí de propósito: protótipo de uma a três telas, onde a comparação é confiável e o valor já está entregue. Versionar declaração é problema de quem já pegou a mão.

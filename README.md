# Prototipação Funcional · material do curso

Material que o aluno baixa: o projeto base, os quatro protótipos, os conjuntos de dados e as sete skills do método.

Curso do [Laboratório DesignIA](https://labdesignia.com.br). Este repositório não contém as aulas, contém o que elas constroem.

## Como o aluno recebe

Ele **não clona este repositório**. Baixa um zip por protótipo, na aula em que aquele protótipo aparece. Git só entra no curso no módulo 7, e como conteúdo.

Os zips saem de [Releases](../../releases), montados pelo script em `scripts/`. Cada zip é autocontido: boilerplate mais o protótipo mais os dados mais as sete skills, tudo numa pasta.

Isso é decisão de conteúdo, não de conveniência. O curso inteiro afirma que **um protótipo é uma pasta na sua máquina**. Se o aluno precisasse juntar peças de dois lugares, a primeira aula desmentiria a tese.

## Estrutura

```
metodo/
  FORMATO.md         a definição da declaração. Fonte única
  skills/            as sete, uma pasta com SKILL.md cada
boilerplate/
  servidor/          a camada que dorme até o módulo 6
  referencia/        o que envelhece: nome de modelo, comandos, custos
prototipos/
  loja/              casca. Layout e zero lógica          (módulos 1, 2, 3)
  academia/          casca                                (módulo 4)
  creche/            PRONTA, construída pelo método       (módulos 5, 7, 8)
  cinema/            casca + declaração sem nenhuma IA    (módulo 6)
scripts/
  montar-zips.mjs    combina boilerplate + protótipo + skills
```

## Por que um repositório e não cinco

**As skills são compartilhadas pelos quatro protótipos.** Em repositórios separados, cada correção numa skill teria que ser propagada quatro vezes, e a primeira vez que alguém esquecesse, dois zips passariam a ensinar coisas diferentes.

**O `FORMATO.md` é único por definição.** O método existe para evitar duas fontes da mesma informação. Um formato duplicado em quatro repositórios seria o método se contradizendo na própria distribuição.

**O zip precisa nascer montado.** A montagem é um passo de build, e passo de build entre repositórios desincroniza sozinho.

**Uma pessoa mantém isso.** Cinco repositórios é cinco vezes o overhead de release, issue e histórico, sem nenhum ganho de isolamento real.

## Público de propósito

O repositório é público, e isso é coerente e não descuido. O curso defende que a skill que escreve a declaração não pode ser caixa preta, e que abrir a skill de entrevista e ler as perguntas dela é, em si, uma aula. Uma skill trancada num repositório privado contradiz o argumento no lugar mais importante.

O que é pago são as aulas, não o código base.

## Convenções

**Uma pasta por protótipo, com os mesmos arquivos.** Quem entende um, entende os quatro.

**Nenhum protótipo tem lógica que o aluno vai escrever.** A casca é layout. Se o zip já vem com a coisa funcionando, a aula perde o assunto. A creche é a exceção declarada: ela vem pronta porque o módulo 5 é sobre ler uma declaração alheia e construir só a camada de cenários.

**Os dados vivem em `dados/padrao/`, um arquivo por entidade, em JSON.** Convenção completa em `metodo/FORMATO.md`.

**Sem travessão em nada escrito aqui**, incluindo comentário de código e mensagem de commit.

## Versionar

Uma tag por revisão do material, `material-vN`. O zip que o aluno baixa aponta sempre para a última release, então corrigir um protótipo é criar uma tag, não editar um link em oito aulas.

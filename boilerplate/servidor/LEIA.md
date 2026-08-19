# servidor/

A camada mínima que roda ao lado do navegador. Ela **dorme até o módulo 6** e o
aluno não sabe que existe.

Precisa existir desde o módulo 1 por um motivo específico: quando chegar a hora
de chamar um modelo, a chamada não pode sair do navegador, senão a chave fica
visível para qualquer pessoa que abra o inspecionar. A chamada sai daqui, que
roda na máquina do aluno.

Nada disso exige hospedagem: tudo funciona em localhost. Hospedar é assunto do
módulo 7, e serve para outra pessoa acessar.

A alternativa seria trocar de projeto no módulo 6, e custa caro: meia aula
explicando por que a estrutura mudou, justamente no módulo mais denso do curso,
e o modelo mental de "o protótipo é uma pasta" se quebra no fim.

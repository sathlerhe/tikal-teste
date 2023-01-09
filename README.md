## | Considerações iniciais

Quando o usuário loga e atualiza a página, ele acaba perdendo o login, por conta de não existir a persistência dos dados dele. Não pude fazer essa persistência por conta de não existir uma rota no backend que fizesse a validação do token do usuário.

## | Rotas da aplicação

### /

É a página inicial, que dá a opção do usuário fazer o login, como aluno ou como professor.

### /student-login

Página para o estudante fazer o seu login.

### /professor-login

Página para o professor fazer o seu login.

### /dashboard

Página que só pode ser acessada depois que feito o login, nela o estudante verá as suas notas e o professor verá a de seus alunos.

### /profile

Página onde o usuário poderá ver os seus dados e fazer sair da aplicação.

## Comandos

### npm install

Instala as dependências.

### docker-compose up

Inicia a aplicação dentro de um docker container.

### npm start

Inicia a aplicação localmente.

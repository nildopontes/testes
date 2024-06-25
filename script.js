/**
  Função executada quando o login é efetuado com sucesso
*/
function handleCredentialResponse(googleUser) {
    console.log(googleUser);
}

/**
  Função executada quando ocorrer falha no logn
*/
function onFailure(error) {
    console.log(error);
}

/**
  Função de deslogar o usuário
*/
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
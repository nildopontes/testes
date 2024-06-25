google.accounts.id.initialize({
  client_id: '613616399292-i7njqr6ek4t8grt7ft3c3e6airkldn3e.apps.googleusercontent.com',
  callback: handleCredentialResponse
});
function handleCredentialResponse(response) {
  if (response.credential) {
    console.log('Credenciais do usuário:', response.credential);
  } else {
    console.log('O usuário não fez login.');
  }
}
document.getElementById('login-button').addEventListener('click', function() {
  google.accounts.id.prompt(notification => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      console.log('O usuário não visualizou ou pulou a notificação.');
    } else {
      console.log('O usuário interagiu com a notificação.');
    }
  });
});
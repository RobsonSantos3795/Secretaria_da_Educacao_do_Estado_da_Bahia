/*function login() {
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');

            // Usuário e senha fixos para demonstração
            const validUsername = 'Joao@diretor';
            const validPassword = 'sec123@';

            if (usernameInput === validUsername && passwordInput === validPassword) {
                // Se as credenciais estiverem corretas, armazena um "token" no localStorage
                // Para simplificar, usaremos uma flag simples. Em um app real, seria um JWT ou sessionId.
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html'; // Redireciona para a página inicial
            } else {
                errorMessage.textContent = 'Usuário ou senha incorretos.';
            }
}*/
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const validUsers = [
        { username: "Joao@diretor", password: "sec123@"},
        { username: "Robson@analista", password: "sec321@"}
    ];

    const isValid = validUsers.some(cred => cred.username === user && cred.password === pass);

    if (isValid) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
}
// Formulário de Cadastramento.
function login2() {
        window.location.href = "https://forms.gle/bSPmoPY8CBgVf1ZKA";
}
// Acesso as pastas de painel.
function convenio() {
    window.location.href = "convenio.html";
}
function cst() {
    window.location.href = "cst.html";
}
// Volta para a página inicial.
function inicio2() {
    window.location.href = "index.html";
}
// Caminho para Dashboards.
function a() {
    window.location.href = "";
}
function b() {
    window.location.href = "";
}
function TG() {
    window.location.href = "";
}
function MAP() {
    window.location.href = "";
}
function R() {
    window.location.href = "";
}
function M() {
    window.location.href = "";
}
function ativos() {
    window.location.href = "";
}

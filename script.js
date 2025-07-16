function login() {
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
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiYjdlNjZhMGUtYjNmOC00NTIxLTk5MDktN2NmNzc5ZGU5ZTNlIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}
function b() {
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiN2FjN2VmMzQtNjY2ZC00MWQ4LTkwMjItMDhmZmM4Y2MyZWNiIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}
function TG() {
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiZDhmMjA3NTUtNzgzYi00NDdlLWFmM2MtM2YzY2YwZTI4OWI3IiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}
function MAP() {
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiZWM1MjU5ZmYtMmE0Ni00YmJiLWE0MGQtZjA4Yzc4MDQ2MGExIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}
function R() {
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiOWEwOWViNjMtNGRjMC00MDdmLWJhOTktMzJiNTIwOWE4YTk5IiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}
function M() {
    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiNWE5YzVkZDYtNTNhZi00NGUzLTk0OTgtYWFhYTdlZGIxNTFmIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9";
}

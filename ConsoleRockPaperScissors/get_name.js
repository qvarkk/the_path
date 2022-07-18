const redir_button = document.getElementById('redir');
const redirect = () => {
    window.location.replace('index.html');
    let nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname);
}
redir_button.addEventListener('click', redirect);
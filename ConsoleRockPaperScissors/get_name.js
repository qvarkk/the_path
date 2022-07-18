const redir_button = document.getElementById('redir');
let nickName_2;
const redirect = () => {
    window.location.replace('index.html');
    const funcName = document.getElementById('nickname').submit();
    funcName = nickName_2;
}
redir_button.addEventListener('click', redirect);
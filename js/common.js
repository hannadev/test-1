// Верхняя панель с сообщением
var messageBar = document.querySelector('.message-bar');
var messageClose = document.querySelector('.message-bar__btn-close');
messageClose.addEventListener('click', function(e){
    e.preventDefault();
    messageBar.remove();
});
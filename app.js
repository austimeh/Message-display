const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  // let content = messageIn.value;
  if(messageIn.value === ''){
    alert('Please enter a valid value')
  }else
  messageOut.innerHTML = messageIn.value;
  messageIn.value = ''
}
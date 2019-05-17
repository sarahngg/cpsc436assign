let chatJSON = {"message": ["This is a chat box.", "The \"SEND\" button adds your typed message to this chat and clears the textarea.", "The \"CLEAR\" button clears the text in the textarea.", "The \"CLEAR HISTORY\" clears the chat history in this box, including these useful messages!", "Note: Empty messages will not be added to the chat history"]};
let chatJSONString = JSON.stringify(chatJSON);
let chatJSONObj = JSON.parse(chatJSONString);
let chatObj = [];
var emojiArr = ["🌚","😬","😳","🙃","🤔"];

function initializeChatHistory() {
  for (let x in chatJSONObj.message) {
    let message = chatJSONObj.message[x];
    chatObj[x] = message;
    document.getElementById("chat-history-list").innerHTML += '<li>' + message + '</li>';
    console.log(message);
  }
}

function sendMessage() {
  let name = document.getElementById("input-name").value;
  let msg = document.getElementById("input-message").value;
  //var trimmedMessage = message.trim();
  if(msg != "") {
    if(name == "") name = randomEmojiPicker();
    chatObj.push(name + ": " + msg);
    displayChatMessage(name + ": " + msg);
    clearTextArea();
  }
}

function randomEmojiPicker() {
  let x = Math.floor((Math.random() * emojiArr.length));
  return emojiArr[x];
}

function clearTextArea() {
  document.getElementById("input-name").value = "";
  document.getElementById("input-message").value = "";
}

function displayChatMessage(msg) {
  document.getElementById("chat-history-list").innerHTML += '<li>' + msg + '</li>';
  console.log(msg);
}

function clearChatHistory(){
    document.getElementById("chat-history-list").innerHTML = "";
    chatObj = [];
}


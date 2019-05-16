var chatObj = ["What do you want?", "Regular peal milk tea 30% sugar no ice please.", "Just a moment."];
//var chatJSON = JSON.parse(chatObj);

function initializeChatHistory() {
  for (var x in chatObj) {
    var message = chatObj[x];
    document.getElementById("chat-history-list").innerHTML += '<li>' + message + '</li>';
    console.log(message);
  }
}

function sendMessage() {
  var msg = document.getElementById("input-message").value;
  //var trimmedMessage = message.trim();
  if(msg != "") {
    chatObj.push(msg);
    displayChatMessage(msg);
  }
  clearTextArea();
}

function clearTextArea() {
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


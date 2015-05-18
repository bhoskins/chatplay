(function() {
  'use strict';


  $(document).ready(function() {
    console.log('Welcome to my code!');

    var ajaxUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
    var idArray = [];

    var templateString = $('[data-template-name=message-box]').text();
    var nameTemplate = _.template(templateString);

//function to display info in the chat room
    function displayMessages(user, message, createdAt) {
      $('.chat-room').append(nameTemplate({
         username: user,
         message: message,
         createdAt: createdAt
      }));
      $('.chat-room').scrollTop($('.chat-room')[0].scrollHeight);
    }

//function to post a message when submitted
    function postMessage() {
      var message = $('.message-box').val();
      var username = $('.username-box').val();
      var createdAt = moment().format('MM/D, h:mm:ss');
      var userData = {
        username: username,
        message: message,
        createdAt: createdAt
      }
      if( message != null || message != "") {
      $.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: userData
      });
      $('.message-box').val('');
          }else {
      return;
    }
    }

// function to get all messages when page loads
    function getMessages() {
      $.ajax({
        url: ajaxUrl,
        type: 'GET'
      }).done(function(data) {
        var messageList = data.reverse();
        _.each(messageList, function(item, index) {
          idArray.push(item._id);
          displayMessages(item.username, item.message, item.createdAt);
        });
      });
    }

//function to look for new messages
    function update() {
      $.ajax({
        url: ajaxUrl,
        type: 'GET'
      }).done(function(data){
        console.log('Just updated. Will update again in 5 seconds');
        _.each(data, function(item, index) {
          if (_.contains(idArray, item._id)){
            return;
          }else {
            displayMessages(item.username, item.message, item.createdAt);
            idArray.push(item._id);
          }
        });
      });
    }

// Load all messages when page loads/refreshes
    window.onload = getMessages();

//post message and update with submit button
    $(".submit-btn").on("click", postMessage);
    $(".submit-btn").on("click", update);

// Updates chat room every 5 seconds
    setInterval(update, 5000);

  });
})();

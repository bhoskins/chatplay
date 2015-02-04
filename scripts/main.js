(function() {
  'use strict';


  $(document).ready(function() {
    console.log('im ready');

    var $ajaxUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
    var $userName = $(".user-box").val();
    var $userMessage = $(".message-box").val();
    var $createdAt;

    var username;
    var message;

    // var templateString = $({name: "burt", message: "Got a long way to go" });
    //
    // var messageTemplate = _.template(templateString);
    // _.each()

    var object = [{
      username: "BethHoskins",
      message: "Whatsup",
    }];
    var templateString = $('[data-template-name=name]').text();
    var nameTemplate = _.template(templateString);

    _.each(object, function(item) {
      $('.chat-room').append(nameTemplate({
         username: item.username,
         message: item.message
      }));
    });

    //
    // $.ajax({
    //   url: $ajaxUrl,
    //   type: 'GET'
    //
    // }).done(function(data) {
    //   // console.log(data);
    //   if((Date.now() - (data.createdAt) ) <  30000 ) {
    //   _.each(data, function(datum){
    //     $userName = data.username;
    //     $userMessage = data.message;
    //     $createdAt = data.createdAt;
        //
        //  if(Date.now() - (Date.parse(data.createdAt)) ) <  30000
        // if (datum.username === "" || datum.message === "" )
  //       {
  //         return;
  //
  //       } else {
  //           console.log(datum[0].name);
  //       // $('.chat-room').append( messageTemplate({username: datum.username,
  //       // message: datum.message,
  //       // createdAt: datum.createdAt}) );
  //
  //     }
  //
  //   });
  //
  // }
  //
  //   });
  //
  //    ajax push code below
  //   $.ajax({
  //     url: $ajaxUrl,
  //     type: 'POST',
  //     data: { username: $userName,
  //             message: $userMessage,
  //             createdAt: $createdAt }
  //
  //   }).done(function(data) {
  //
  //   });
  //



  });
})();

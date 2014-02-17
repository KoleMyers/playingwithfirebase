$(document).ready(function() {
		 var myDataRef = new Firebase('https://koleschat.firebaseio.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
         var text = $('#messageInput').val();
          myDataRef.push({value: text});
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.value);
      });
      function displayChatMessage(someInput) {
         var $div = $('<div />').prependTo('.mainContent');
          $div.attr('id', 'messages');
          $div.html(someInput);
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
  
});




(function($){ 
  $(function() {
    $('#account_submit').click(function(event) {
      if ($('#account_name').val().length == 0) {
        $('#account_name').wrap('<div class="fieldWithErrors"></div>');
      }
      // Act on the event; can use (event.target)
      return false;
    });
  });
})(jQuery); 

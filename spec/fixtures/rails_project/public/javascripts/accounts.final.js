(function($){ 
  $(function() {
    $('#account_submit').click(function(event) {
      if ($('#account_name').val().length == 0) {
        $('#account_name').wrap('<div class="fieldWithErrors"></div>');
      }
      return false;
    });
  });
})(jQuery); 


// (function($){ 
//   $(function() {
//     $('#account_submit').click(function(event) {
//       if ($('#account_name').val().length == 0) {
//         $('#account_name').wrap('<div class="fieldWithErrors"></div>');
//         return false;
//       }
//       if (stop_post_events) { return false; }
//     });
//   });
// })(jQuery); 

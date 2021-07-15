$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "../mail.php",
      type: "POST",
      data: $('#form').serialize(),
      success: function(response) {
        //обработка успешной отправки
      },
      error: function(response) {
      }
    });
  });
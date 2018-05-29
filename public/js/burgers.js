$(document).ready(function() {
  $('#burger-submit').on('click', function(event) {
    event.preventDefault();
    var newData = {
      name: $('#burger-name').val().trim()
    };
    $.ajax('/api/burgers', {
      type: "POST",
      data: newData,
      statusCode: {
        404: () => {
          alert('Empty strings are unacceptable')
        }
      }
    }).then(() => {
      location.reload();
    });
  });

  $('body').on('click', '.eat-burger', function(event) {
    var newData = {
      id: $(this).data('id')
    }
    $.ajax('/api/burgers/' + newData.id, {
      type: "PUT",
      data: newData
    }).then(
      function() {
        location.reload();
      }
    );
  });
});

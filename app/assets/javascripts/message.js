$(function () {
  function buildHTML(message) {


    var html = `
    <div class="message-info">
                  <h1 class="message-info--name">
                  ${message.user_name}
                  </h1>
                  <h1 class="message-info--date">
                  ${message.created_at}
                  </h1>
                  </div>
                  <h1 class="message-text">
                  ${message.content}
                  </h1>
                 `
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.message').append(html)
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'slow');
        document.getElementById("new_message").reset();
      })
      .fail(function () {
        alert('投稿に失敗しました');
      })
  })

});

$(function () {
  // function buildHTML(message) {

  function buildHTML(message) {
    if (message.image.url) {
     var image = `<img class="lower-message__image" src="${message.image.url}" alt="Fh000001"></img> `;
    }

    var html =
      `
      <div class="message-info">
      <h1 class="message-info--name">
      ${message.user_name}
      </h1>
      <h1 class="message-info--date">
      ${message.created_at}
      </h1>
      </div>
      <h1 class="message-text",data-id=${message.id}>
      ${message.content}
      </h1>
      ${image}
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

  var reloadMessages = function () {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    lastMessage=$(".message-text").filter(":last");
    last_message_id = lastMessage.attr('data-id')
    $.ajax({
      url: 'api/messages',
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: { id: last_message_id }
    })
    .done(function (data) {
      if (data.length !== 0) {
        data.forEach(function (message) {
          var html = buildHTML(message);
          $('.message').append(html)
        });
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'slow');
      }
    })

    .fail(function () {
      alert('投稿に失敗しました');
    });
  };
  setInterval(reloadMessages, 5000);
});

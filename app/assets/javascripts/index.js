$(function () {

  function addUserTogroup(user,user_id) {
    var html = 
      `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${user_id}'>
      <p class='chat-group-user__name'>${user}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>`
    return html;
  }

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
</div>`
    return html;
  }

  function appendErrMsgToHTML(msg) {
    var html = ` <div class='user-search-result'>${msg}</div> `
    return html;
  }

  $("#user-search-field").on("keyup", function () {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function (users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function (user) {
          var html = appendUser(user);
          $("#user-search-result").append(html);
        });
      }
      else {
        var html = appendErrMsgToHTML("一致するユーザーはありません");
        $("#user-search-result").append(html);
      }
    })

    .fail(function () {
      alert('ユーザー検索に失敗しました');
    })
  });

  $(document).on("click", ".user-search-add", function () {
    $(this).parent().remove();
    var user_name = $(this).attr('data-user-name');
    var user_id = $(this).attr('data-user-id');
    var html = addUserTogroup(user_name, user_id);
    $("#chat-group-users").append(html);
  });

  $(document).on("click", ".user-search-remove", function () {
    $(this).parent().remove();
  });
});

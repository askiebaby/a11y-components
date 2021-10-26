$(document).ready(function (e) {
  $('#signin').submit(function () {
    $('#alert').html('');
    $('#status').html('');

    if ($('#account').val() === '') {
      $('#alert').append('<p class="alert alert-danger">請輸入帳號</p>');
    }

    if ($('#password').val() === '') {
      $('#alert').append('<p class="alert alert-danger">請輸入密碼</p>');
    }

    if ($('#account').val() !== '' && $('#password').val() !== '') {
      $('#status').append('<p class="alert alert-success">已登入成功</p>');
    }

    return false;
  });
});

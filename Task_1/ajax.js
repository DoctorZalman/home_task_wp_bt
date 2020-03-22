$(document).ready(function () {
  $("#btn").click(
    function () {
      sendAjaxForm('#result_form', 'ajax_form');
      return false;
    }
  );
});

function sendAjaxForm(result_form, ajax_form) {
  $.ajax({
    url: `action_ajax_form.php`, //url сторінки (action_ajax_form.php)
    type: "GET", //метод відправки
    dataType: "html", //формат даних
    data: $("#" + ajax_form).serialize(),  // створ об'єкт
    success: function (response) { //Дані відправлені успішно
      result = $.parseJSON(response);
      $(result_form).html(response);
      $('#ajax_form input:not([type=\'button\'])').val('');
    },
    error: function (response) { // Дані не відправлені
      $(result_form).html('Помилка. Дані не відправлені.');
    }
  });
}
jQuery(function () {
    var data = {
      'csrfmiddlewaretoken':$('input[type="hidden"]').val(),
        'city': $('#id_city').val(),
        'visluga': $('#id_visluga').val(),
        'shouse': $('#id_shouse').val(),
        'prinadlez': $('#id_prinadlez').val(),
        'area': $('#id_area').val(),
        'family': $('#id_family').val(),
        'dop_s_house': $('#id_dop_s_house').val(),
    };
    $('a#submit').click(function () {
           $.ajax({
       type: 'POST',
       url: 'alg/',
       data: data,
       success: function (data) {
           $('#itog').text("Размер единоразовой выплаты: " + data['price'] + " руб.");
       }
   }) ;
    });

});
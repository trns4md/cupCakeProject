function myFunction(){
    alert("Warning! These cupcakes are addictive!");
  };
$(function(){
  $('#red').click(function(){
    $('#redPop').show();
  });
  $('#caramel').click(function(){
    $('#carPop').show();
  });
  $('#espresso').click(function(){
    $('#chocPop').show();
  });
  $('#redPop').click(function(){
    $('#redPop').hide();
  });
  $('#carPop').click(function(){
    $('#carPop').hide();
  });
  $('#chocPop').click(function(){
    $('#chocPop').hide();
  });
});
$(function(){
  $('.btn').click(function(){
    var price = +$('.price').data('price');
    var quantity = +$('.quantity').val();
    $('#price').text('$' + price * quantity)
  });
}); 
  
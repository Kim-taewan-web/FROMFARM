$(function(){
  
  $('#filter1').click(function () {
    $('.filter1').show();
    $('.filter2, .filter3,.filter4, .filter5').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter1, .filter3,.filter4, .filter5').hide();
  });
  $('#filter3').click(function () {
    $('.filter3').show();
    $('.filter1, .filter2,.filter4, .filter5').hide();
  });
  $('#filter4').click(function () {
    $('.filter4').show();
    $('.filter1, .filter2,.filter3, .filter5').hide();
  });
  $('#filter5').click(function () {
    $('.filter5').show();
    $('.filter1, .filter2,.filter3, .filter4').hide();
  });
  $('.product3_inner> ul> li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
});
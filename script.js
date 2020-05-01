$('#toggle').click(function() {
  $('.slide-in').toggleClass('show');
});

$('#main').mouseover(function() {
    $('.slide-in').toggleClass('show');
    $('.toggle').toggleClass('open');
  })
  $('#main').mouseout(function() {
    $('.slide-in').toggleClass('show');
    $('.toggle').toggleClass('open');
  });

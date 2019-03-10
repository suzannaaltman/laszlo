$( document ).ready(function() {


  $('#getGif').click(function(){
    getLazer();
  });




});

const getLazer = function(){
  $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=laser-lights&rating=g", function(response){
    $('#gif').attr({src:response.data.image_url, width:response.data.image_width});
  })
  .done(function(){
    if ($('#getGif').hasClass('first')){
      $('#getGif').removeClass('first').text('More Lasers!');
    }
  })
}
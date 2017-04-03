function myFunction() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var x = document.getElementById("frm1");
  $.getJSON( flickerAPI, {
    tags: x.elements[0].value,
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 8 ) {
          return false;
        }
      });
    });
};
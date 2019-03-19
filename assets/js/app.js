function checkSize(){
  if ($(window).width() >= 920) {
    $("#desktop-container").show();
    $("#mobile-container").hide();
  } else {
    $("#desktop-container").hide();
    $("#mobile-container").show();
  }
}
checkSize();

$(document).ready(function() {
  $(window).resize(function() {
    checkSize()
  });

  var drake = dragula([
    document.getElementById("applied"),
    document.getElementById("heardBack"),
    document.getElementById("offer")
  ]);

  drake.on("drop", function(el, target, source, sibling) {
    console.log(
      "Started at: " +
        source.id +
        " Landed at:" +
        target.id +
        " Sibling " +
        el.previousSibling.id
    );
  });
});

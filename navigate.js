$(function(e) {

  //initial setup of 
  var tabs = $(".tabs");
  var selector = $(".tabs").find(".selector");
  var activeTab = tabs.find(".active");
  $(".selector").css({
    left: activeTab.position.left + "px",
    width: activeTab.innerWidth() + "px"
  });

  $(".tabs").on("click", "a", function() {
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    $(".selector").css({
      left: $(this).position().left + "px",
      width: $(this).innerWidth() + "px"
    });

    $(".scroller page").removeClass("active");
    $(this).addClass("active");
    $(".scroller").css({
        top: $(".products").innerHeight + "vh",
    });

  });


  /*$(".scroller").css({
    top: -100 + "vh",
  });*/

});

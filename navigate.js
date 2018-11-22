$(function(e) {

  var tabs = $(".tabs").find(".tab");
  var pages = $(".scroller").find(".page");
  console.log("loaded tabs: 0-" + (tabs.length-1));
  console.log("loaded pages: 0-" + (pages.length-1));

  //initial setup of menu bar selector position
  var selector = $(".tabs").find(".selector");
  var activeTab = $(".tabs").find(".active");
  $(".selector").css({
    left: activeTab.position.left + "px",
    width: activeTab.innerWidth() + "px"
  });

  $(".tabs").on("click", "a", function() {
    //change selector position on click
    console.log("tab: " + tabs.index(this));
    $(".tabs .tab").removeClass("active");
    $(this).addClass("active");
    $(".selector").css({
      left: $(this).position().left + "px",
      width: $(this).innerWidth() + "px"
    });

    //scroll page on click
    $(".scroller .page").removeClass("active");
    $(pages[tabs.index(this)]).addClass("active");
    var i;
    var distance = 0;
    for (i = 0; i < tabs.index(this); i++) {
        distance -= $(pages[i]).innerHeight();
    }
    $(".scroller").css({
        top: distance + "px",
    });



    console.log(tabs);
    console.log(pages);
  });


  /*$(".scroller").css({
    top: -100 + "vh",
  });*/


});

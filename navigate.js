  $(function() {

  var tabs = $(".tabs").find(".tab");
  var pages = $(".scroller").find(".page");
  console.log("loaded tabs: 0-" + (tabs.length-1));
  console.log("loaded pages: 0-" + (pages.length-1));

  //on page load
  var selector = $(".tabs").find(".selector");
  var activeTab = $(".tabs").find(".active");
  $(".selector").css({
    left: activeTab.position.left + "px",
    width: activeTab.innerWidth() + "px"
  });

  //on tab click
  $(".tabs").on("click", "a", function() {
    //change selector position on click
    console.log("tab " + tabs.index(this) + " pressed...");
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
    console.log("scrolling " + -distance + " pixels from top");
  });

  //on keypress
  $(document).keydown(function(key) {
    //scroll down on PageDown pressed, and adjust tab selector (if not at bottom)
    if (key.which == 34) {
      console.log("PageDown pressed...");
      var currentPage = pages.index($(".scroller").find(".active"))
      if (currentPage < pages.length - 1) {
        $(".scroller .page").removeClass("active");
        $(pages[currentPage + 1]).addClass("active");
        var i;
        var distance = 0;
        for (i = 0; i < currentPage + 1; i++) {
            distance -= $(pages[i]).innerHeight();
        }
        $(".scroller").css({
            top: distance + "px",
        });
        console.log("scrolling " + -distance + " pixels from top");
        $(".tabs .tab").removeClass("active");
        $(tabs[currentPage + 1]).addClass("active");
        $(".selector").css({
          left: $(".tabs").find(".active").position().left + "px",
          width: $(".tabs").find(".active").innerWidth() + "px"
        });
      }
      else {
        console.log("Not scrolling: limit reached...")
      }
    }

    //scroll up on PageUp pressed, and adjust tab selector (if not at top)
    if(key.which == 33) {
      console.log("PageUp pressed...");
      var currentPage = pages.index($(".scroller").find(".active"))
      if (currentPage > 0) {
        $(".scroller .page").removeClass("active");
        $(pages[currentPage - 1]).addClass("active");
        var i;
        var distance = 0;
        for (i = 0; i < currentPage - 1; i++) {
            distance -= $(pages[i]).innerHeight();
        }
        $(".scroller").css({
            top: distance + "px",
        });
        console.log("scrolling " + -distance + " pixels from top");
        $(".tabs .tab").removeClass("active");
        $(tabs[currentPage - 1]).addClass("active");
        $(".selector").css({
          left: $(".tabs").find(".active").position().left + "px",
          width: $(".tabs").find(".active").innerWidth() + "px"
        });
      }
      else {
        console.log("Not scrolling: limit reached...")
      }
    }

    //scroll to bottom on End pressed, and adjust tab selector (if not at bottom)
    if(key.which == 35) {
      console.log("End pressed...");
      var currentPage = pages.index($(".scroller").find(".active"))
      if (currentPage != pages.length - 1) {
        $(".scroller .page").removeClass("active");
        $(pages[pages.length - 1]).addClass("active");
        var i;
        var distance = 0;
        for (i = 0; i < pages.length - 1; i++) {
            distance -= $(pages[i]).innerHeight();
        }
        $(".scroller").css({
            top: distance + "px",
        });
        console.log("scrolling " + -distance + " pixels from top");
        $(".tabs .tab").removeClass("active");
        $(tabs[pages.length - 1]).addClass("active");
        $(".selector").css({
          left: $(".tabs").find(".active").position().left + "px",
          width: $(".tabs").find(".active").innerWidth() + "px"
        });
      }
      else {
        console.log("Not scrolling: limit reached...")
      }
    }

    //scroll to top on Home pressed, and adjust tab selector (if not at top)
    if(key.which == 36) {
      console.log("Home pressed...");
      var currentPage = pages.index($(".scroller").find(".active"))
      if (currentPage != 0) {
        $(".scroller .page").removeClass("active");
        $(pages[0]).addClass("active");
        var i;
        var distance = 0;
        for (i = 0; i < 0; i++) {
            distance -= $(pages[i]).innerHeight();
        }
        $(".scroller").css({
            top: distance + "px",
        });
        console.log("scrolling " + -distance + " pixels from top");
        $(".tabs .tab").removeClass("active");
        $(tabs[0]).addClass("active");
        $(".selector").css({
          left: $(".tabs").find(".active").position().left + "px",
          width: $(".tabs").find(".active").innerWidth() + "px"
        });
      }
      else {
        console.log("Not scrolling: limit reached...")
      }
    }
  });

  //scrollwheel test
  $(".scroller").bind("wheel", function(w) {
    if(w.originalEvent.deltaY /120 > 0) {
      var distance = parseInt($(".scroller").css("top"));
      distance -= $(".wrapper").innerHeight() / 2.5;
    }
    else{
      var distance = parseInt($(".scroller").css("top"));
      distance += $(".wrapper").innerHeight() / 2.5;
    }
    var i;
    var maximum = 0;
    for (i = 0; i < pages.length - 1; i++) {
        maximum -= $(pages[i]).innerHeight();
    }
    if(distance >= 0) distance = 0;
    if(distance <= maximum) distance = maximum;
    var holdDuration = $(".scroller").css("transition-duration");
    var holdEquation = $(".scroller").css("transition-timing-function");
    $(".scroller").css({
          transition-duration: 0,
          transition-timing-function: holdEquation,
          top: distance + "px",
    });
    $(".scroller").css({
          transition-duration: holdDuration,
          transition-timing-function: holdEquation,
    });
  });


});

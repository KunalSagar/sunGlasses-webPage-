window.onscroll = function(){scrollFunc()};

function scrollFunc() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.querySelector(".topbar-moveable").style.top = "0";
    } else {
        document.querySelector(".topbar-moveable").style.top = "-7rem";    
    }
  }

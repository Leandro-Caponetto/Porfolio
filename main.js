
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
      indicators: false,
      interval: 4000
    });


    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);


    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
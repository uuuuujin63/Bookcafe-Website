window.addEventListener('load', function () {
  document.getElementsByTagName('button')[0].addEventListener('click', function () {
    var h = parseInt(document.getElementById("h").value);
    var m =  parseInt(document.getElementById("m").value);
    var s = parseInt(document.getElementById("s").value);
    var time = 0;
    if (h) {
      time += h * 3600;
    }
    if (m) {
      time += m * 60;
    }
    if (s) {
      time += s;
    }
    // document.getElementById("timearea").innerHTML = time;
    var x = setInterval(function () {
      h = parseInt(time/3600);
      m = parseInt((time%3600)/60);
      s = (time % 60);
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      document.getElementById("timearea").innerHTML = h + ":" + m + ":" + s;
      time--;
      if (time < 0) {
        document.getElementById("timearea").innerHTML = '00:00:00';
      }
    }, 1000);
    
    });
  });
  

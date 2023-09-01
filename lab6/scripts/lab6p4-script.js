var catEl = document.getElementById("cat");
  
  var startTime = new Date().getTime();
  var walkTheCat = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);

      var newPosition = secondsElapsed * 300;
    
    
    if (newPosition <= 1000) {
        catEl.style.left = newPosition + "px";
        requestAnimationFrame(walkTheCat);
    }
  };
      
  walkTheCat();
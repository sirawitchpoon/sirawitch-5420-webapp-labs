var catPic = document.getElementById("cat-pic");
            var onCatClick = function(e) {
                var stashePic = document.getElementById("mustache-pic");  
                stashePic.style.top = event.clientY + -25 + "px";
                stashePic.style.left = event.clientX + -50 + "px";
            };
            catPic.addEventListener("click", onCatClick);
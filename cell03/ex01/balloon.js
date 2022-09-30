const balloon = document.getElementById("balloon");
const balloonStyle = getComputedStyle(balloon)

    function increaseCircle(){
        let currHeight = balloon.offsetHeight;
        let currWidth = balloon.offsetWidth;

        balloon.style.height = currHeight + 10 + "px"
        balloon.style.width = currWidth + 10 + "px"

        if (currHeight > 420){
            balloon.style.height = 200 + "px"
            balloon.style.width = 200 + "px"
        }
    }

    function circleColor(){
        let balloonColor = balloonStyle.backgroundColor;
 
        if (balloonColor == 'rgb(255, 0, 0)')
            balloon.style.backgroundColor = 'green';
        else if (balloonColor == 'rgb(0, 128, 0)')
            balloon.style.backgroundColor = 'blue';
        else if (balloonColor == 'rgb(0, 0, 255)')
            balloon.style.backgroundColor = 'red';
    }

    function decreaseCircle(){
        let currHeight = balloon.offsetHeight;
        let currWidth = balloon.offsetWidth;

        if (currHeight > 200){
            balloon.style.height = currHeight - 5 + "px"
            balloon.style.width = currWidth - 5 + "px"
        }
    }
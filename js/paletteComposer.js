function getRandomColor() {
    var letters = '0123456789ABCDEF', color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.getElementById("background").style.backgroundColor = getRandomColor();
    var bgColor = document.getElementById("background").style.backgroundColor;
    var tempColor = bgColor.split("(")[1].split(")")[0]; //cut away CSS parts
    tempColor = tempColor.split(",");   //split into separate numbers
    var hexColor = tempColor.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    hexColor = "#"+hexColor.join("");  //glue it back together
    document.getElementById("colorNumber").innerHTML = hexColor;

    }

function getRandomColor() {
    var letters = '0123456789ABCDEF', color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomBackgroundColor() {
    document.getElementById("background").style.backgroundColor = getRandomColor();
}

function showColorHex() {
    document.getElementById("colorNumber").innerHTML = rgbaToHex(); //write color in hex

    }

function rgbaToHex() {
    var bgColor = document.getElementById("background").style.backgroundColor;
    var tempColor = bgColor.split("(")[1].split(")")[0]; //cut away CSS parts
    tempColor = tempColor.split(",");   //split into separate numbers
    var hexColor = tempColor.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    hexColor = "#"+hexColor.join("");  //glue it back together
    return hexColor;
}



function getRandomColorUnit() {
    var letters = '0123456789ABCDEF';
    var colorUnit = letters[Math.floor(Math.random() * 16)];
    return colorUnit;
}

function splitHexToArray() {
    var tempHex = rgbaToHex(),
        splitHex = [];

    for (var i = 0; i < 7; i += 1) {
        splitHex.push(tempHex.charAt(i));
    }
    return splitHex;
}

function changeByColor(button_id) {
    var colorToChange = splitHexToArray();

    if (button_id == "red") {
        colorToChange[1] = getRandomColorUnit();
        colorToChange[2] = getRandomColorUnit();
    } else if (button_id == "green") {
        colorToChange[3] = getRandomColorUnit();
        colorToChange[4] = getRandomColorUnit();
    } else if (button_id == "blue") {
        colorToChange[5] = getRandomColorUnit();
        colorToChange[6] = getRandomColorUnit();
    }

    var newHex = colorToChange.join("");

    document.getElementById("background").style.backgroundColor = newHex;
    document.getElementById("colorNumber").innerHTML = newHex;
}


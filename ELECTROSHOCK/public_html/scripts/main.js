function checkedRadioBtn(sGroupName) {
    var group = document.getElementsByName(sGroupName),
        i = 0;

    for (i = 0; i < group.length; i += 1) {
        if (group.item(i).checked) {
            return group.item(i).id;
        } else if (group[0].type !== 'radio') {
            //if you find any in the group not a radio button return null
            return null;
        }
    }
}

document.getElementById("submit_btn").onclick = function () {
    "use strict";

    //document.getElementById("first").innerHTML = "2+2=4";
    var numArray = prompt("Δώσε νούμερα χωρισμένα με κόμμα:").split(",").map(Number),
        ans = 0,
        str = "",
        i = 0,
        checkedRadio;

    checkedRadio = checkedRadioBtn("operation");

    if (checkedRadio === "addition") {
        ans = 0;
        for (i = 0; i < numArray.length; i += 1) {
            ans += numArray[i];
            str += numArray[i];

            if (i !== numArray.length - 1) {
                str += "+";
            }
        }
    } else {
        ans = 1
        for (i = 0; i < numArray.length; i += 1) {
            ans *= numArray[i];
            str += numArray[i];

            if (i !== numArray.length - 1) {
                str += "*";
            }
        }
    }


    str = str + "=" + ans;
    document.getElementById("first").innerHTML = str;
    document.getElementById("first").style.color = "orange"; //#471835";
    document.getElementById("first").style.fontWeight = "bold";
    document.getElementById("first").style.fontSize = "xx-large";
};







/*
// Need to show console in browser
var myArray = ["oranges", "apples", "watermelons"];
myArray.forEach(function (value, index) {
    console.log('I bought ' + value + ' from the shop');
});
*/
/*
Q1:
Check if jQuery is loaded
*/
//DONE
/*

Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$(document).ready(function () {
    $('#goUpBtn').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);

    })
})
/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
var oldWidth, oldHeight;

$(document).ready(function () {
     oldWidth = $('#box').width();
     oldHeight = $('#box').height();

    $('#btn1').on('click', function () {
    $('#box').animate({width: '300px', height: '300px'})
    })
})

$(document).ready(function () {
    $('#btn2').on('click', function () {
    $('#box').animate({width: oldWidth, height: oldHeight})
    })
})

/*
Q4:
Learn how to fadein your boxes
*/


/*
Q5:
User must first accept then he or she can signup
*/


/*
Q6:
Let them print
*/


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/


/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
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
        $('#box').animate({
            width: '300px',
            height: '300px'
        })
    })
})

$(document).ready(function () {
    $('#btn2').on('click', function () {
        $('#box').animate({
            width: oldWidth,
            height: oldHeight
        })
    })
})

/*
Q4:
Learn how to fadein your boxes
*/
$(document).ready(function () {
    $('#btnQ4').on('click', function () {
        $("#div1").fadeIn(3000);
        $("#div2").fadeIn(3000);
        $("#div3").fadeIn(3000);
    });
});

/*
Q5:
User must first accept then he or she can signup
*/
$(document).ready(function () {
    $("#accept").click(function () {
        $("#submitbtn").attr("disabled", !this.checked);
    });
});

/*
Q6:
Let them print
*/
$(document).ready(function () {
    $('#print').on('click', function () {
        window.print();
    })
});

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$(document).ready(function () {
    var totalLength = 20;
    $('#rchars').text(20);

    $("#textarea").on('keyup', function () {
        $("#textarea").attr('maxLength', 20);
        $('#rchars').text(totalLength - $("#textarea").val().length);
    });
});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(document).ready(function () {
    $('.bolder').css('font-weight', 'bolder')
});

/*
Q9:
Add new div to your website
*/
var btn = $('input[value="Click to add new div"');

function new_div() {
    btn.after('<div style="height: 150px; width: 150px; background-color: blue"></div>')
}


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/
$(document).ready(function () {

    var btn = $('#btnclick');
    var ul = $('#header ul');

    btn.on('click', function () {
        ul.append('<li><a href="#">New Element</a></li>');
    });
});

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
$("h1").addClass("big-title");

$("button").addClass("green-btn margin-10");

$(".btn-1").click(function () { 
    $("h1").removeClass("big-title");
    $("h1").text("Пока!")
});

$(".btn-2").click(function () { 
    $("h1").toggleClass("big-title");
    
});

$(".btn-3").click(function () { 
    $("button").addClass("red-btn");
    $("button").text("Не нажимать!")
});


$("button").click(function () {
    if ($("button").hasClass("red-btn")) {
        $(this).slideUp();
    } 
});



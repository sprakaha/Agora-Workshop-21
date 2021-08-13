var validEmail = 1;

// Change Border Color with JS
$(document).ready(function () {
    $("#email").on("input", function () {

        if (checkEmail($("#email").val()))
            $("#email").css({
                border: "1px solid green"
            });
        else
            $("#email").css({
                border: "2px solid red"
            });
    })

    function checkEmail(txt) {
        var patt = /[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
        if (patt.test(txt)) {
            validEmail = 0;
            return true;
        } else
            return false;
    }
})

// Alert user of Log In 
$("#submitButton").click(function () {
    if (validEmail == 0)
        alert("Logged In!");
});
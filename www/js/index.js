$( document ).ready(function() {
    $('.regBody').height($(document).height() - 40);
    $('#loader').height($(document).height());
    $('#logIn').fadeIn(500);
    $('#SignUpPage').click(function () {
    	$('#logIn').fadeOut(500);
    	$('#signUp').fadeIn(500);
        cordova.plugins.barcodeScanner.scan(function (result) {
            alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
              "preferFrontCamera" : false,
              "showFlipCameraButton" : true,
              "showTorchButton" : true,
              "disableAnimations" : true,
              "prompt" : "Place your Aadhar card inside the scan area",
              "formats" : "QR_CODE,PDF_417",
              "orientation" : "portrait"
            }
        );
    });
    $('#SignPageText').click(function () {
    	$('#signUp').fadeOut(500);
    	$('#logIn').fadeIn(500);
    });
    $('.signInUpButton').click(function () {
        $('#logIn').fadeOut(500);
        $('#loader').fadeIn(500);
    });    
    $('#Desc').width($('#noOfUnit').width());
    $('.priorityBar').width(5);
    $('.caseDetWrap').width($('.caseDetails').width() - 15);
    $('.priorityBar').height($('.caseDetails').height());
    $('#map_canvas').height($(document).height() - 135);
    $('#map_canvas').width($(document).width());
    $('.fa-map-marker').click(function() {
        window.location.href = "maps.html";
    });
});
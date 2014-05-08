// Custom JavaScript 





//Function for demoing active card

function activeCardDemo() {
    var cardno = $('#demoField').val();

    if (cardno == '4') {
        $('.visa').removeClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '51') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').removeClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '34') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').removeClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '6011') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').removeClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }


    if (cardno == '54') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').removeClass("inactive-card");
        $('.jcb').addClass("inactive-card");
    }

    if (cardno == '3528') {
        $('.visa').addClass("inactive-card");
        $('.mastercard').addClass("inactive-card");
        $('.amex').addClass("inactive-card");
        $('.discover').addClass("inactive-card");
        $('.diners').addClass("inactive-card");
        $('.jcb').removeClass("inactive-card");
    }

    if (cardno == '') {
        $('.visa').removeClass("inactive-card");
        $('.mastercard').removeClass("inactive-card");
        $('.amex').removeClass("inactive-card");
        $('.discover').removeClass("inactive-card");
        $('.diners').removeClass("inactive-card");
        $('.jcb').removeClass("inactive-card");

    }
}



//Function for switching to new card

function editCardStep1() {
    $('.saved-1-card').hide();
    $('.change-1-card-stage-1').show();
}

function editCardStep2() {
    $('.change-1-card-stage-1').hide();
    $('.change-1-card-stage-2').show();
}


//Functions to switch from saved to new card for shared module

function switchToNew() {
    $('#saved-card-pane').hide();
    $('#new-card-pane').show();
}

function switchToSaved() {
    $('#new-card-pane').hide();
    $('#saved-card-pane').show();
}

function toggleDescription() {
    $('.saved-card-description').toggle();

}



//Function for switching to saved card

function savedCard() {
    $('.add-card').hide();
    $('.saved').show();
}

//Function for switching between dropdown option for saved card list (saved cards state)

function changeSavedOption() {
    var ccchoice = $('#demoCCDropdown1').val();

    if (ccchoice == '5') {
        $('.change-1-card-stage-1').hide();
        $('.change-1-card-stage-2').show();
        $("#demoCCDropdown2").val("5");
    }
}

function changeSavedOption2() {
    var ccchoice2 = $('#demoCCDropdown2').val();

    if (ccchoice2 != '5') {
        $('.change-1-card-stage-2').hide();
        $('.change-1-card-stage-1').show();
        $("#demoCCDropdown1").val("ccchoice2");
    }
}




function signIn() {
    $('.site-content').fadeTo(250, 0.3, function() {
        $('.notification').fadeToggle().delay(500);
        $('.notification').fadeToggle(function() {
            $('.notsignedin').fadeToggle();
            $('#traveler-guest').fadeToggle(function() {
                $('.signedin').fadeToggle();
                $('#traveler-signedin').fadeToggle(function() {
                    $('.site-content').fadeTo(250, 1);
                });
            });
        });
    });
}

//Function for filling hotel/activity contact

$('#t1lastname').blur(function(){
    var t1fn = $("#t1firstname").val();
    var t1ln = $("#t1lastname").val();
    $('#hotelname1').html(t1fn + ' ' + t1ln);
    $('#activityname1').html(t1fn + ' ' + t1ln);
  });

$('#t2lastname').blur(function(){
    var t2fn = $("#t2firstname").val();
    var t2ln = $("#t2lastname").val();
    $('#hotelname2').html(t2fn + ' ' + t2ln);
    $('#activityname2').html(t2fn + ' ' + t2ln);
  });

//Function for filling out account creation email address

$('#emailaddress').blur(function(){
    var emailaddress = $("#emailaddress").val();
    $('#creationemail').val(emailaddress);
  });


//Funcation for playback

 $('#getTextBoxValue').on("click", function(){               
 
        var t1fn = $("#t1firstname").val();
        var t1ln = $("#t1lastname").val();
        alert('Traveler1 lastname is'+ t1fn + t1ln);
    });

//Function for displaying and hiding insurance moduel

$('#ins-added').hide();
$('#ins-declined').hide();


function selectInsurance() {
    $('.site-content').fadeTo(250, 0.3, function() {
        $('.notification').fadeToggle().delay(500);
        $('.notification').fadeToggle(function() {
            $('.site-content').fadeTo(250, 1);
        });

    });
    if (document.getElementById('ins-option1-button').checked || document.getElementById('ins-option2-button').checked) {
        $('#ins-added').fadeIn().delay(1000);
        $('#ins-plans').fadeToggle().delay(1000);

    } else if (document.getElementById('ins-option3-button').checked) {
        $('#ins-declined').fadeIn().delay(1000);
        $('#ins-plans').fadeToggle().delay(1000);
        
    }
    
}

function showInsPlan() {
    $('#ins-added').hide();
    $('#ins-declined').hide();
    $('#ins-plans').fadeToggle().delay(1000);
}
$(document).ready(function(){
$("#tabs").tabs();	

$('#accordion').accordion();	
$('#accordioncreateaccount').accordion();
$('#accordionlogin').accordion();
$('#accordioncandidate').accordion();

$('#availabledate').datepicker({ changeMonth: true ,changeYear:true});
$('#createacc').click(function(){
window.open('candidate/candidate/new','_blank')	;	
return false;
});

$('#currentjobs').click(function(){
	window.open('http://www.enveritasgroup.com/contract-writers-and-editors/','_blank');
return false;
});


$('#login').click(function(){
	window.open('candidate/candidate/createaccount','_blank');
return false;	
});

$("#email").blur(function() 
    { 
        var emailaddr; 
        emailaddr = $("#email").val().length;

        $("#lblemailerror").empty(); 
 
        if (emailaddr < 1) 
		{			
			$("#email_warning").text("");	  
			$("#email_confirm").text("");
			$("#email_warning").append("Email is Empty"); 
			$(this).focus();
			 			
		}
		else
		{			
			$("#email_confirm").text("");
			$("#email_warning").text("");
			$('#formcreate').submit();		
		}	
		
			return false;
    });

$("#passwordagain").blur(function(){
	
var passwd1 = $("#password").val();
var passwd2 = $("#passwordagain").val();
	
	if(passwd1 != passwd2 || (passwd1 == "" || passwd2 == ""))
	{
		$("#password_warning").text("");
		$("#password_warning").append("Passwords do not match or it is not valid.Please Enter Password Again");
		$("#password").focus();
		$('#mandatoryfields').css('color','red');
		return false;
	}
	else
	{
			$("#password_warning").text("");
			$("#password_warning").append("Passwords accepted");
			$('#mandatoryfields').css('color','green');
			return false;
	}
	
});


//$("#email_confirm").text("");	
//$("#email_warning").text("");


$('#fname').blur(function(){
//alert("Fields are mandatory");
if ($('#fname').val() == '')
{
	//alert("Fields are mandatory");
			$("#fnameerr").text('');
			$("#fnameerr").append("First Name is Mandatory");
			$(this).focus();
			return false;
}	
else
{
	$("#fnameerr").text('');
	return false;
}
});

$('#lname').blur(function(){
//alert("Fields are mandatory");
if ($('#lname').val() == '')
{
	//alert("Fields are mandatory");
		$("#lnameerr").text('');
		$("#lnameerr").append("Last Name is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#lnameerr").text('');
	return false;
}

});

$('#street').blur(function(){
//alert("Fields are mandatory");
if ($('#street').val() == '')
{
	//alert("Fields are mandatory");
		$("#streeterr").text('');
		$("#streeterr").append("Street is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#streeterr").text('');
	return false;
}

	return false;
});

$('#city').blur(function(){
//alert("Fields are mandatory");
if ($('#city').val() == '')
{
	//alert("Fields are mandatory");
		$("#cityerr").text('');
		$("#cityerr").append("City is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#cityerr").text('');
	return false;
}
	return false;
});

$('#state').blur(function(){
//alert("Fields are mandatory");
if ($('#state').val() == '')
{
	//alert("Fields are mandatory");
		$("#stateerr").text('');
		$("#stateerr").append("State is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#stateerr").text('');
	return false;
}
	return false;
});

$('#zip').blur(function(){
//alert("Fields are mandatory");
if ($('#zip').val() == '')
{
	//alert("Fields are mandatory");
		$("#ziperr").text('');
		$("#ziperr").append("Zip is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#ziperr").text('');
	return false;
}
	return false;
});

$('#phonenumber').blur(function(){
//alert("Fields are mandatory");
if ($('#phonenumber').val() == '')
{
	//alert("Fields are mandatory");
		$("#phoneerr").text('');
		$("#phoneerr").append("Phone is Mandatory");
		$('#phonenumber').focus();
		return false;
}	
else
{
	$("#phoneerr").text('');
	return false;
}
	return false;
});


$('#hourlyrate').blur(function(){
//alert("Fields are mandatory");
if ($('#hourlyrate').val() == '')
{
	//alert("Fields are mandatory");
		$("#hourlyrateerr").text('');
		$("#hourlyrateerr").append("Hourly Rate is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#hourlyrateerr").text('');
	return false;
}
	return false;
});

$('#hoursavailable').blur(function(){
//alert("Fields are mandatory");
if ($('#hoursavailable').val() == '')
{
	//alert("Fields are mandatory");
		$("#hoursavailableerr").text('');
		$("#hoursavailableerr").append("Hours Available is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#hoursavailableerr").text('');
	return false;
}
	return false;
});

$('#availabledate').blur(function(){
//alert("Fields are mandatory");
if ($('#availabledate').val() == '')
{
	//alert("Fields are mandatory");
		$("#availabledateerr").text('');
		$("#availabledateerr").append("Date is Mandatory");
		$(this).focus();
		return false;
}	
else
{
	$("#availabledateerr").text('');
	return false;
}
	return false;
});

$('#submitcreateform').click(function(){

$("#mandatoryfields").append("Fill in the Mandatory Fields");
if($("#email").val() == '' || $("#password").val() == '' || $("#passwordagain").val() == '' || $("#fname").val() == '' || $("#lname").val() == '' || $("#street").val() == '' || $("#city").val() == '' || $("#state").val() == '' || $("#zip").val() == '' || $("#country").val() == '' || $("#phone").val() == ''	|| $("#hourlyrate").val() == '' || $("#hoursavailable").val() == '' || $("#availabledate").val() == '')
{
$("#mandatoryfields").text('');	
$("#mandatoryfields").append("Fill in the Mandatory Fields");
return false;
}	
else
{
	$("#mandatoryfields").text('');	
	$('#formcreate').submit();	
}

});


$('#accloginbtn').click(function(){
	
	if($("#email").val() == '' || $("#password").val() == '')
	{
		$("#mandatoryfields").text('');	
		$("#mandatoryfields").append("Fill in the Mandatory Fields");
		return false;
	}
	return false;
});

$(".slidingDiv").hide();
        $(".show_hide").show();
 
    $('.show_hide').click(function(){
    $('.slidingDiv').slideToggle();
    });


$("#sendemailbtn").click(function(){
	if($("#emailtxt").val() != '')	
	{
		if( $("#passwdreset").val() != '' && $("#passwdresetconfirm").val() != '' ) 
		{		
			if(   $("#passwdreset").val() == $("#passwdresetconfirm").val()  )
			{
				$("#mandatoryfields1").text('');	
				$("#emailform").submit();
			}
			else
			{
				$("#mandatoryfields1").text('');	
				$("#mandatoryfields1").append("Passwords do not match. Please enter passwords again");
				return false;
			}
		}
		else
		{
			$("#mandatoryfields1").text('');	
			$("#mandatoryfields1").append("Passwords cannot be blank");
			return false;
		}
	}
			else
			{
				$("#mandatoryfields1").text('');	
				$("#mandatoryfields1").append("Fill in the Mandatory Fields");
				return false;
			}
				return false;
			});

	

return false;
});



/*
	Click event of the signup button
*

$("#signup").click(function () {

		var name = $("#nameSu").val();
		var address = $("#AddressSu").val();
		var dist = $("#distSu").val();
		var city = $("#citySu").val();
		var bg = $("#BGSu").val();
		var mob = $("#mobSu").val();
		var mail = $("#emailSu").val();
		var uname = $("#useridSu").val();
		var pass = $("#passwordSu").val();

		//var sdata =;
		//alert(JSON.stringify(sdata;
		$.ajax({
			type:"POST",
			url:"http://localhost/108/app/api/user/reg",
	
			data:JSON.stringify('{"foo":5}'),
			success:function(response){

				alert(response);
				
				//location.reload();
			},
			error:function (xhr,status,error){
				alert(status +" , " + error);
			}

		});
});

/*
	Click event for the signin button
*/

$("#signin").click(function (){
    var user = $("#mail").val();
	var pass = $("#pass").val();
	// document.getElementById('abc').style.display='inline';
	var url = "http://108test.esy.es/app/api/user/"+ user +"/" + pass;
	$.ajax({
		type:'GET',
		url:url,
		crossDomain:true,
		dataType:'jsonp',
		success:function(data){
			if(data=='exist'){
				window.location.href='index2.html';
			} else {
				alert('error invalid user');
		        $('#loader').fadeOut(500);	
		        $('#logIn').fadeIn(500);			
			}
		},
		error:function(aa,error,status){
			// console.log(error);
			alert('error console');
	        $('#loader').fadeOut(500);	
	        $('#logIn').fadeIn(500);
		}
	});

	
	
});
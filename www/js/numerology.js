//Device Ready Event
document.addEventListener("deviceready", onDeviceReadyAction, false);
function onDeviceReadyAction() {
	
	//Handle Menu 
	$( "#menu-cntrl" ).click(function() {
		if($("#menu").is(":visible")) {
			hidePopup();
			//$("#menu").hide(200);
		} else {
			$("#menu").show(400);
			$("#setting").hide(200);
		}
	});

	//Handle Menu 
	$( "#setting-cntrl" ).click(function() {
		if($("#setting").is(":visible")) {
			hidePopup();	
			//$("#setting").hide(200);
		} else {
			$("#setting").show(400);
			$("#menu").hide(200);
		}
	});
}


function hidePopup() {
	hideMenu();
	hideSetting();
}

function hideMenu() {
	$("#menu").hide(200);
}

function hideSetting() {
	$("#setting").hide(200);
}

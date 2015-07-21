//Device Ready Event
document.addEventListener("deviceready", onDeviceReadyAction, false);
function onDeviceReadyAction() {
	
	//Handle Menu 
	$( "#menu-cntrl" ).click(function() {
		if($("#menu").is(":visible")) {
			hidePopup();
			//$("#menu").hide(200);
		} else {
			$("#menu").show(350);
			$("#setting").hide(200);
		}
	});

	//Handle Menu 
	$( "#setting-cntrl" ).click(function() {
		if($("#setting").is(":visible")) {
			hidePopup();	
			//$("#setting").hide(200);
		} else {
			$("#setting").show(350);
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
//Share the app link with user
function share() {
	window.plugins.socialsharing.share('Try this great Tamil App - ', '1500+ Tamil Tips',null,'https://play.google.com/store/apps/details?id=com.smart.droid.tamil.tips');
	hidePopup();
}

//Provide Feedback
function feedback() {
	window.plugin.email.open({
		to:      ['tips2stayhealthy@gmail.com'],
		subject: 'Feedback on Tamil Kuripugal V0.2.3',
		body:    '',
		isHtml:  true
	});
	hidePopup();
}
//Rate App
function rate() {
	var version = device.platform;
	hidePopup();
	if(version == "Android") {
		var url = "market://details?id=com.smart.droid.tamil.tips";
        window.open(url,"_system");		
	} else {
		//var url = "https://play.google.com/store/apps/details?id=com.smart.droid.telugu.tips"
	}	
}

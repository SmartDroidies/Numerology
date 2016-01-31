//Device Ready Event
document.addEventListener("deviceready", onDeviceReadyAction, false);
function onDeviceReadyAction() {
	
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


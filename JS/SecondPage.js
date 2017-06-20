document.getElementById('sp').onclick=function () {
	if (document.getElementById('ta').value=="") {
		alert("You have to write something");
	};
}
var textField = document.getElementById("ta");

textField.onfocus = function () {
	if (textField.placeholder == "Enter your comments") {
		textField.placeholder="What do you think of this tutorial?";
	}
};

textField.onblur = function () {
	if (textField.placeholder == "What do you think of this tutorial?") {
		textField.placeholder="Enter your comments";
	}
};
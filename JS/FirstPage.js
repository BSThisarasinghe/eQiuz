var myImage = document.getElementById("category1");

var ImageArray = ["Images/2.jpg","Images/3.jpg","Images/4.jpg","Images/5.jpg","Images/6.jpg","Images/7.jpg","Images/1.jpg"];

var ImageIndex=0;

function changeImage () {
	myImage.setAttribute("background",ImageArray[ImageIndex]);
	ImageIndex++;
	if (ImageIndex>=ImageArray.length) {
		ImageIndex=0;
	}
}

setInterval(changeImage,10000);
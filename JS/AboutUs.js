var img1=document.getElementById('img1');

var imageArr=["Images/Buwa2.jpg","Images/Buwa3.jpg","Images/Buwa1.jpg"];
index=0;

function changeImage () {
	img1.setAttribute("src",imageArr[index]);
	index++;
	if (index>=imageArr.length) {
		index=0;
	};
}
setInterval(changeImage,5000);

var img2=document.getElementById('img2');

var imageArr2=["Images/sh2.jpg","Images/sh3.jpg","Images/sh1.jpg"];
index2=0;

function changeImage2 () {
	img2.setAttribute("src",imageArr2[index2]);
	index2++;
	if (index2>=imageArr2.length) {
		index2=0;
	};
}
setInterval(changeImage2,5000);

var img3=document.getElementById('img3');

var imageArr3=["Images/la2.jpg","Images/la3.jpg","Images/la1.jpg"];
index3=0;

function changeImage3 () {
	img3.setAttribute("src",imageArr3[index3]);
	index3++;
	if (index3>=imageArr3.length) {
		index3=0;
	};
}
setInterval(changeImage3,5000);
document.getElementById("button").onclick=function(){
	if((document.getElementById('r1').checked || document.getElementById('r2').checked || document.getElementById('r3').checked || document.getElementById('r4').checked || document.getElementById('r5').checked) &&
		(document.getElementById('r6').checked || document.getElementById('r7').checked || document.getElementById('r8').checked || document.getElementById('r9').checked || document.getElementById('r10').checked) &&
		(document.getElementById('r11').checked || document.getElementById('r12').checked || document.getElementById('r13').checked || document.getElementById('r14').checked || document.getElementById('r15').checked) &&
	 	(document.getElementById('r16').checked || document.getElementById('r17').checked || document.getElementById('r18').checked || document.getElementById('r19').checked || document.getElementById('r20').checked) &&
	 	(document.getElementById('r21').checked || document.getElementById('r22').checked || document.getElementById('r23').checked || document.getElementById('r24').checked || document.getElementById('r25').checked))
	 {
		if (document.getElementById('r1').checked) {
		document.getElementById("div1").innerHTML="Correct!";
		document.getElementById("div1").setAttribute("style","color:  #269c0c;");
	}
	if (document.getElementById('r7').checked) {
		document.getElementById("div2").innerHTML="Correct!";
		document.getElementById("div2").setAttribute("style","color:  #269c0c;");
	}
	if (document.getElementById('r13').checked) {
		document.getElementById("div3").innerHTML="Correct!";
		document.getElementById("div3").setAttribute("style","color:  #269c0c;");
	}
	if (document.getElementById('r18').checked) {
		document.getElementById("div4").innerHTML="Correct!";
		document.getElementById("div4").setAttribute("style","color:  #269c0c;");
	}
	if (document.getElementById('r24').checked) {
		document.getElementById("div5").innerHTML="Correct!";
		document.getElementById("div5").setAttribute("style","color:  #269c0c;");
	}
	if(document.getElementById('r2').checked || document.getElementById('r3').checked || document.getElementById('r4').checked || document.getElementById('r5').checked){
		document.getElementById("div1").innerHTML="Wrong!";
		document.getElementById("div1").setAttribute("style","color:   #da442d;");
	}
	if(document.getElementById('r6').checked || document.getElementById('r8').checked || document.getElementById('r9').checked || document.getElementById('r10').checked){
		document.getElementById("div2").innerHTML="Wrong!";
		document.getElementById("div2").setAttribute("style","color:   #da442d;");
	}
	if(document.getElementById('r11').checked || document.getElementById('r12').checked || document.getElementById('r14').checked || document.getElementById('r15').checked){
		document.getElementById("div3").innerHTML="Wrong!";
		document.getElementById("div3").setAttribute("style","color:   #da442d;");
	}
	if(document.getElementById('r16').checked || document.getElementById('r17').checked || document.getElementById('r19').checked || document.getElementById('r20').checked){
		document.getElementById("div4").innerHTML="Wrong!";
		document.getElementById("div4").setAttribute("style","color:   #da442d;");
	}
	if(document.getElementById('r21').checked || document.getElementById('r22').checked || document.getElementById('r23').checked || document.getElementById('r25').checked){
		document.getElementById("div5").innerHTML="Wrong!";
		document.getElementById("div5").setAttribute("style","color:   #da442d;");
	}

	if(document.getElementById("button").onclick){
		document.getElementById("OpenWindow").style.display="block";
	}else{
		document.getElementById("OpenWindow").style.display="none";
	}
	}
	else{
		alert("You are not done yet!");
	}
		
	}

document.getElementById("OpenWindow").style.display="none";

document.getElementById("OpenWindow").onclick=function(){
	if (document.getElementById('r1').checked && document.getElementById('r7').checked && document.getElementById('r13').checked && document.getElementById('r18').checked && document.getElementById('r24').checked) {
		window.open("SixthPage.html");
		}
	else{
		alert("You are not suitable for next quiz!   Please refer the tutorials first.");
		}
}

	var sec = 0;
	var min = 0;
	var hrs = 0;

function time () {
	
	if (sec<=59) {
		sec++;
		if (sec<10) {
		sec="0"+sec;
		}
		if (sec>59) {
			sec=0;
			min++;
			
			if (min>59) {
				min=0;
				hrs++;
				
				if (hrs>24) {
					hrs=0;
				};
			};
		};
		
	};
		

	document.getElementById("time").innerHTML=hrs+":"+min+":"+sec;

}
function tick () {
	if (min<10) {
		min="0"+min;
		}
	
	if (hrs<10) {
		hrs="0"+hrs;
	}
}
window.onload=function () {
	tick();
	setInterval(time,1000);
}

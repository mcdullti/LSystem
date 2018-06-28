var axiom;
var sentence;
var lenS = 0;
var len = 1 + lenS;
var t = 0;
var x;

var axiom1 = "FX";
var axiom2 = "X";
var axiom3 = "F";
var axiom4 = "[7]++[7]++[7]++[7]++[7]";
var axiom5 = axiom3;
var axiom6 = "F+F+F+F";
var axiom7 = "F=F=F=F";
var axiom8 = axiom3;
var axiom9 = "F=F=F=F=F";
var axiom0 = "L==F==L==F";

var rules1 = [];
rules1[0] = {
	a:"X",
	b:"X(YF("
}

rules1[1] = {
	a:"Y",
	b:")FX)Y"
}

var rules2 = [];
rules2[0] = {
	a:"X",
	b:"F[=X][X]F[=X]+FX"
}

rules2[1] = {
	a:"F",
	b:"FF"
}

var rules3 = [];
rules3[0] = {
	a:"F",
	b:"+F==F+"
}

var rules4 = [];
rules4[0] = {
	a:"6",
	b:"81++91====71[=81====61]++"
}

rules4[1] = {
	a:"7",
	b:"+81==91[===61==71]+"
}

rules4[2] = {
	a:"8",
	b:"=61++71[+++81++91]="
}

rules4[3] = {
	a:"9",
	b:"==81++++61[+91++++71]==71"
}

rules4[4] = {
	a:"1",
	b:""
}

var rules5 = [];
rules5[0] = {
	a:"F",
	b:"CFF=[D=F+F+F]+[E+F=F=F]"
}

var rules6 = [];
rules6[0] = {
	a:"F",
	b:"F+f=FF+F+FF+Ff+FF=f+FF=F=FF=Ff=FFF"
}

rules6[1] = {
	a:"f",
	b:"ffffff"
}

var rules7 = [];
rules7[0] = {
	a:"F",
	b:"FF=F=F=F=FF"
}

var rules8 = [];
rules8[0] = {
	a:"F",
	b:"F+X++X=F==FF=X+"
}

rules8[1] = {
	a:"X",
	b:"=F+XX++X+F==F=X"
}

var rules9 = [];
rules9[0] = {
	a:"F",
	b:"F=F++F+F=F=F"
}

var rules0 = [];
rules0[0] = {
	a:"L",
	b:"+R=F=R+"
}

rules0[1] = {
	a:"R",
	b:"=L+F+L="
}

function generate1() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==17) {break;}
		for (var j = 0; j<rules1.length; j++) {
			if (current == rules1[j].a) {
				found = true
				nextSentence +=rules1[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	dragon();
	if(t>=17){
		background(51);
		axiom = axiom1;
		sentence = axiom;
		t=0;
	} else if(t<17) {
		t++;
	}
}

function generate2() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==8) {break;}
		for (var j = 0; j<rules2.length; j++) {
			if (current == rules2[j].a) {
				found = true
				nextSentence +=rules2[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Plant();
	if(t>=8){
		background(51);
		axiom = axiom2;
		sentence = axiom;
		t=0;
	} else if(t<8) {
		t++;
	}
}

function generate3() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==17) {break;}
		for (var j = 0; j<rules3.length; j++) {
			if (current == rules3[j].a) {
				found = true
				nextSentence +=rules3[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	CCurve();
	if(t>=17){
		background(51);
		axiom = axiom3;
		sentence = axiom;
		t=0;
	} else if(t<17) {
		t++;
	}
}

function generate4() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==7) {break;}
		for (var j = 0; j<rules4.length; j++) {
			if (current == rules4[j].a) {
				found = true
				nextSentence +=rules4[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Curve();
	if(t>=7){
		background(51);
		axiom = axiom4;
		sentence = axiom;
		t=0;
	} else if(t<7) {
		t++;
	}
}

function generate5() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==6) {break;}
		for (var j = 0; j<rules5.length; j++) {
			if (current == rules5[j].a) {
				found = true
				nextSentence +=rules5[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	PPlant();
	if(t>=6){
		background(51);
		axiom = axiom5;
		sentence = axiom;
		t=0;
	} else if(t<6) {
		t++;
	}
}

function generate6() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==3) {break;}
		for (var j = 0; j<rules6.length; j++) {
			if (current == rules6[j].a) {
				found = true
				nextSentence +=rules6[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Box();
	if(t>=3){
		background(51);
		axiom = axiom6;
		sentence = axiom;
		t=0;
	} else if(t<3) {
		t++;
	}
}

function generate7() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==5) {break;}
		for (var j = 0; j<rules7.length; j++) {
			if (current == rules7[j].a) {
				found = true
				nextSentence +=rules7[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Square();
	if(t>=5){
		background(51);
		axiom = axiom7;
		sentence = axiom;
		t=0;
	} else if(t<5) {
		t++;
	}
}

function generate8() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==6) {break;}
		for (var j = 0; j<rules8.length; j++) {
			if (current == rules8[j].a) {
				found = true
				nextSentence +=rules8[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Spiral();
	if(t>=6){
		background(51);
		axiom = axiom8;
		sentence = axiom;
		t=0;
	} else if(t<6) {
		t++;
	}
}

function generate9() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==6) {break;}
		for (var j = 0; j<rules9.length; j++) {
			if (current == rules9[j].a) {
				found = true
				nextSentence +=rules9[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Hex();
	if(t>=6){
		background(51);
		axiom = axiom9;
		sentence = axiom;
		t=0;
	} else if(t<6) {
		t++;
	}
}

function generate0() {
	var nextSentence = "";
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		if (t==16) {break;}
		for (var j = 0; j<rules0.length; j++) {
			if (current == rules0[j].a) {
				found = true
				nextSentence +=rules0[j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	//createP(sentence);
	Dia();
	if(t>=16){
		background(51);
		axiom = axiom0;
		sentence = axiom;
		t=0;
	} else if(t<16) {
		t++;
	}
}

function dragon() {
	background(51);
	translate(width/2,height*2/3);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "(") {
			rotate(PI / 2);
		} else if (current == ")") {
			rotate(-PI / 2);
		}  
	}
}

function Plant() {
	background(51);
	translate(width/2,height);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "=") {
			rotate(-PI / 180 * 25);
		} else if (current == "+") {
			rotate(PI / 180 * 25);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		} 
	}
}

function CCurve() {
	background(51);
	translate(width/3,height/3);
	rotate(PI/2);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 4);
		} else if (current == "=") {
			rotate(-PI / 4);
		}  
	}
}

function Curve() {
	background(51);
	translate(width/2,height/2);
	stroke(255);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "1") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 5);
		} else if (current == "=") {
			rotate(-PI / 5);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		} 
	}
}

function PPlant() {
	background(51);
	translate(width/2,height);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 180 * 22);
		} else if (current == "=") {
			rotate(-PI / 180 * 22);
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		} else if (current == "C") {
			stroke(0,128,0);
		} else if (current == "D") {
			stroke(150,75,0);
		} else if (current == "E") {
			stroke(0,128,100);
		} 
	}
}

function Box() {
	background(51);
	translate(width/2,height/2);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 2);
		} else if (current == "=") {
			rotate(-PI / 2);
		} else if (current == "f") {
			line (0,0,0,-len/2);
			translate(0, -len/2);
		} 
	}
}

function Square() {
	background(51);
	translate(width * 2 / 3,height * 2 / 3);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 2);
		} else if (current == "=") {
			rotate(-PI / 2);
		} 
	}
}

function Spiral() {
	background(51);
	translate(width /3,height /3);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 3);
		} else if (current == "=") {
			rotate(-PI / 3);
		} else if (current == "X") {
			line (0,0,0,-len);
			translate(0, -len);
		} 
	}
}

function Hex() {
	background(51);
	translate(width /3,height /3);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 5 * 2);
		} else if (current == "=") {
			rotate(-PI / 5 * 2);
		} 
	}
}

function Dia() {
	background(51);
	translate(width /2,height);
	for (var i = 0; i<sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line (0,0,0,-len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(PI / 4);
		} else if (current == "=") {
			rotate(-PI / 4);
		} 
	}
}

function keyPressed() {
	if (len > 0) {
		if (keyCode == SHIFT) {
			lenS += 1;
		}
		if (keyCode == CONTROL) {
			lenS -= 1;
		}
	} else if (len <= 0) {
		background(51);
		len = 1;
		lenS = 0;
	}
	if (keyCode == ALT) {
		if (x == 1) {
			generate1();
		} else if (x == 2) {
			generate2();
		} else if (x == 3) {
			generate3();
		} else if (x == 4) {
			generate4();
		} else if (x == 5) {
			generate5();
		} else if (x == 6) {
			generate6();
		} else if (x == 7) {
			generate7();
		} else if (x == 8) {
			generate8();
		} else if (x == 9) {
			generate9();
		} else if (x == 0) {
			generate0();
		}
	} else if (key == '1') {
		background(51);
		stroke(255);
		t=0;
		x = 1;
		axiom = axiom1;
		sentence = axiom;
	} else if (key == '2') {
		background(51);
		stroke(255);
		t=0;
		x = 2;
		axiom = axiom2;
		sentence = axiom;
	} else if (key == '3') {
		background(51);
		stroke(255);
		t=0;
		x = 3;
		axiom = axiom3;
		sentence = axiom;
	} else if (key == '4') {
		background(51);
		stroke(255);
		t=0;
		x = 4;
		axiom = axiom4;
		sentence = axiom;
	} else if (key == '5') {
		background(51);
		stroke(255);
		t=0;
		x = 5;
		axiom = axiom5;
		sentence = axiom;
	} else if (key == '6') {
		background(51);
		stroke(255);
		t=0;
		x = 6;
		axiom = axiom6;
		sentence = axiom;
	} else if (key == '7') {
		background(51);
		stroke(255);
		t=0;
		x = 7;
		axiom = axiom7;
		sentence = axiom;
	} else if (key == '8') {
		background(51);
		stroke(255);
		t=0;
		x = 8;
		axiom = axiom8;
		sentence = axiom;
	} else if (key == '9') {
		background(51);
		stroke(255);
		t=0;
		x = 9;
		axiom = axiom9;
		sentence = axiom;
	} else if (key == '0') {
		background(51);
		stroke(255);
		t=0;
		x = 0;
		axiom = axiom0;
		sentence = axiom;
	} else if (keyCode == 'z' || 'Z') {
		background(51);
		sentence = axiom;
		t=0;
	} 

	return false;
}

function setup() {
	createCanvas(screen.width,screen.height);
	background(51);
}

function draw() {
	len = 1+lenS;
}


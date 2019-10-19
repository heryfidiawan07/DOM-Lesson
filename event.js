// Mouse Event
// click, dblclick, mouseover, mouseenter, mouseup, whell, dll...
// Keyboard Event
// keydown, keypress, keyup, dll ...
// View Event
// resize, scroll, dll ...
// Form Event
// reset, submit, dll ...

const addNewList = document.querySelector('div#sect .add-new-list');
addNewList.addEventListener('click', function() {
	const ul = document.querySelector('div#sect ul');
	const li = document.querySelectorAll('div#sect li');
	const newList = document.createElement('li');
	const textNewList = document.createTextNode('List '+(li.length+1));
	newList.appendChild(textNewList);
	ul.appendChild(newList);
});

const btnUbahWarna = document.getElementById('btn-ubahwarna');
const box = document.getElementById('box');
btnUbahWarna.onclick = function(){
	const toggle = box.classList.toggle('lightblue');
	console.log('toggle => ' + toggle);
}

const btnRandomColor = document.createElement('button');
const textBtnRandomColor = document.createTextNode('Random Color');
btnRandomColor.appendChild(textBtnRandomColor);
btnRandomColor.setAttribute('type', 'button');
btnUbahWarna.after(btnRandomColor);

btnRandomColor.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	console.log('r = '+r);
	console.log('g = '+g);
	console.log('b = '+b);
	box.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
	if (box.classList.toggle('lightblue') == false) {
		box.setAttribute('style', 'height: 50px; width: 50px;');
	}
});

const sliderMerah = document.querySelector('input[name=sliderMerah]'); // mencari input dangen nama sliderMerah
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');
const box2 = document.getElementById('box2');
sliderMerah.addEventListener('input', function() {
	const r = sliderMerah.value;
	const g = sliderGreen.value;
	const b = sliderBlue.value;
	console.log(r+','+g+','+b);
	box2.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sliderGreen.addEventListener('input', function() {
	const r = sliderMerah.value;
	const g = sliderGreen.value;
	const b = sliderBlue.value;
	console.log(r+','+g+','+b);
	box2.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sliderBlue.addEventListener('input', function() {
	const r = sliderMerah.value;
	const g = sliderGreen.value;
	const b = sliderBlue.value;
	console.log(r+','+g+','+b);
	box2.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


const box3 = document.getElementById('box3');
document.body.addEventListener('mousemove', function(event) {
	const x = Math.round((event.clientX / window.innerWidth) * 255);
	const y = Math.round((event.clientY / window.innerWidth) * 255);
	box3.style.backgroundColor = 'rgb('+ x +','+ y +',100)';
	console.log('X = '+x+', Y = '+y);
});
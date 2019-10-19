// DOM TRAVERSAL METHOD
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling

const btnClose = document.querySelectorAll('.close');

btnClose.forEach(function(close) {
	close.addEventListener('click', function(e) {
		// close.parentElement.style.display = 'none';
		console.log(e);
		e.target.parentElement.style.display = 'none';
	});
});

const nama = document.getElementsByTagName('h3')[0];
console.log(nama);
console.log(nama.parentNode);
console.log(nama.parentElement);
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);

const cardFrame = document.getElementById('card-frame');
cardFrame.addEventListener('click', function(e){
	if (e.target.classname == 'close') {
		e.target.parentElement.style.display = 'none';
	}
});
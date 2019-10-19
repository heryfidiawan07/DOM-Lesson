// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = '<i>HERI FIDIAWAN</i>';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const paragraft = document.getElementsByTagName('p');

for (let i = 0; i < paragraft.length; i ++) {
	paragraft[i].style.backgroundColor = 'aqua';
}

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Di ubah dari JavaScript';

const li2 = document.querySelector('section#sect ul li:nth-child(2)');
li2.style.padding = '10px';
li2.style.backgroundColor = 'navy';

const list = document.querySelectorAll('li');
for (var b = 0; b < list.length; b++) {
	list[b].style.color = 'green';
}

const profile  = document.querySelector('div#profile');
const profile3 = profile.getElementsByTagName('h5')[3];
profile.style.backgroundColor = 'lightblue';
profile3.style.backgroundColor = 'orange';


// Manipulasi Element ========================================================

// element.innerHTML
// element.style.<property>
// element.setAttribute() // .getAttribute() // .removeAttribute()
// element.classList
	// element.classList.add()
		// Menambahkan class baru
	// element.classList.remove()
		// <p class="satu dua"></p> //.remove('satu'); => <p class="dua"></p>
	// element.classList.toggle()
		// element.toggle('nema class'); memberika class baru dan menghilangkan true the false
	// element.classList.item()
		// <p class="satu dua"></p> //.item(1); => hasilnya dua
	// element.classList.contains()
		// <p class="satu dua"></p> //.contains('satu'); => true
	// element.classList.replace() 
		// <p class="satu dua"></p> //.replace('dua', 'newClassName')

judul.setAttribute('name', 'contoh');
judul.getAttribute('name'); // -> hasilnya contoh


// Manipulasi Node =======================================================

// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// Method Baru===============================================================

// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()

const h5 = document.createElement('h5');
const textProfile = document.createTextNode('Profile 5');
h5.appendChild(textProfile);
profile.appendChild(h5);

const newList = document.createElement('li');
const textNewList = document.createTextNode('New List');
newList.appendChild(textNewList);

const ul = document.querySelector('section#sect ul');
const li3 = ul.querySelector('li:nth-child(3)');

ul.insertBefore(newList, li3);


const h3Baru = document.createElement('h3');
const texth3Baru = document.createTextNode('Profile 2 dari JS');
const h5Lama = profile.querySelector('h5:nth-child(2)');
h3Baru.appendChild(texth3Baru);

profile.replaceChild(h3Baru, h5Lama);

function getPilihanComputer() {
	const comp = Math.random();
	if (comp < 0.34) return 'gajah';
	if (comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if (player == comp) return 'SERI !';
	if (player == 'gajah') return (comp == 'orang') ? 'MENANG !' : 'KALAH !';
	if (player == 'orang') return (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
	if (player == 'semut') return (comp == 'orang') ? 'KALAH !' : 'MENANG !';
}

function computerOnLoad() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah','semut','orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval; return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) i = 0;
	}, 100);
}

const selects = document.querySelectorAll('li img');
selects.forEach(function(select) {
	select.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = select.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		console.log('comp : ' + pilihanComputer);
		console.log('player : ' + pilihanPlayer);
		console.log('hasil : ' + hasil);

		computerOnLoad();

		setTimeout(function() {
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
	});
});

// const playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = playerGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = playerOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = playerSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });
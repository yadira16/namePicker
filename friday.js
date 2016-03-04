var codetalkNames = [];

function resetNames() {
	codetalkNames = ['Bernice', 'Elliette', 'Mirna', 'Erinn', "Aimee", 'Yadira', 'Jessica', 'Janene', 'Denise']
}

function namePicker() {
	var namePick = codetalkNames.splice(Math.floor(Math.random() * codetalkNames.length), 1);
}

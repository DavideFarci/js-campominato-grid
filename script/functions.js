// GENERARE UNA GRIGLIA
function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = "";
	for (let i = 1; i < numCells + 1; i++) {
		eleContainer.innerHTML += `<div class="cell">${i}</div>`;
	}
}

// CAMBIARE COLORE
// function colorCell() {
// 	console.log(this);
// 	this.classList.toggle('clicked');
// }
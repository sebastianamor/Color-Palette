const palleteContainer = document.getElementById('palleteContainer');
const colorValues = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const PALLETE_SIZE = 5;

const createPallete = () => {
    for(let i = 0; i < PALLETE_SIZE; i++){
        const palleteElement = document.createElement('id');
        palleteElement.classList.add('palleteItem')
    }
}






createPallete();
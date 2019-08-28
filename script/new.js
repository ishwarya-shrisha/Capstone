let numberOfTiles = 6;
let randomNum = Math.floor(Math.random() * numberOfTiles);

let signs = [];
//function that creates array of signs to be displayed on the tiles.
function createSignsArr() {
    for (i = 1; i <= (numberOfTiles / 2); i++) {
        signs.push(i);
    }
    return signs
}
createSignsArr();
//creating an array with couples of signs
let signsDouble = signs.concat(signs);

function createStructure() {
    console.log('fired');
    let numberOfTiles = resourcenetwork.Length * 2;
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);
    for (let i = 0; i < 12; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tile');
        div.setAttribute('id', `tile${i}`)
        container.appendChild(div);

        let j = 0;
        do {

            var v_string1 = resourcenetwork[i].provider;
            var v_string2 = resourcenetwork[i].address;
            let v_newline = '\n';
            //	  var v_string3 = v_string1.concat(v_string2);
            var v_string3 = v_string1 + '\n' + v_string2;

            let randomArrayNum = signsDouble.splice(randomNum, 1);
            document.getElementById(`tile${i}`).innerHTML = v_string3;
            j++;
        }


        while (j < numberOfTiles);

    } //end of for loop
} //end of createStructure function

//window.onload = createStructure();
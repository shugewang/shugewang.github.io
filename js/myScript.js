sentence = "Hi";
function typing(sentence){
    const letter = sentence.split("");
    let i = 0;
    while (i <letter.length) {
        document.getElementById("name").innerHTML += letter[i];
        i++;

    }
}



function test(){
    const txt = "Hi, I'm Shu.";
    const letter = txt.split("");
    let i = 0;
    while (i < txt.length) {
        document.getElementById("name").innerHTML += letter[i];
        i++;
    }
}

const line1 = document.getElementById("name").childNodes[1].textContent;
const line2 = document.getElementById("name").childNodes[3].textContent;

function typewriter(txt) {
    let i = 0;
    console.log(txt);
    console.log(txt.length);
    if (i < txt.length) {
        document.getElementById("name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, 50);
    }
}

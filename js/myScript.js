sentence = "Hi";
function typing(sentence){
    const letter = sentence.split("");
    let i = 0;
    while (i <letter.length) {
        document.getElementById("name").innerHTML += letter[i];
        i++;

    }
}



console.log("Hi".split(""));
function test(){
    const txt = "Hi, I'm Shu.";
    const letter = txt.split("");
    let i = 0;
    while (i < txt.length) {
        document.getElementById("name").innerHTML += letter[i];
        i++;
    }
}
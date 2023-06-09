let result = document.getElementById("input-screen");

let calculate=(number)=>{
    result.value+=number;
}

let resultado = () => {
    try {
        result.value = eval(result.value)
    }
    catch(err) {
        alert("wrong value mtf. Enter a good one")
    }

}

function clr() {
    result.value = " ";
}

function borrar () {
    result.value=result.value.slice(0, -1)
}
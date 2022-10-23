function tocarRoca() {
    var userName=prompt("Cual es tu nombre","Ingresa tu nombre aqui.");
    if (userName) {
        alert("es bueno conocerte "+userName);
        document.getElementById("roca").src="2.png";
    }else{
        alert("que grosero!");
        document.getElementById("roca").src="1.png";

    }
}
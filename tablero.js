var player1=prompt("Introduce tu nombre de jugador, Jugador1");
var player2=prompt("Introduce tu nombre de jugador, Jugador2");
let jugador1 = [];
let jugador2 = [];
let turno = 1;
let contador=0
$(function(){
    $("#jugador1").text("Jugador1: "+player1);
    $("#jugador2").text("Jugador2: "+player2);
    $(".casilla").click(function(){
        if (!$(this).hasClass("jugador1") && !$(this).hasClass("jugador2")) {
            if (turno === 1) {
                $(this).addClass("jugador1");
                jugador1.push(parseInt($(this).attr('id').substr(-1)));
                turno = 2;
                contador+=1
            } else {
                $(this).addClass("jugador2");
                jugador2.push(parseInt($(this).attr('id').substr(-1)));
                turno = 1;
                contador+=1
            }
            let ganador = verificarGanador();
            if (ganador === 1) {
                //Me da pereza buscar como hacer para que no se pueda seguir poniendo fichas
                $("#p").text("Ganador "+player1);
                $(".casilla").removeClass("jugador2")
                $(".casilla").addClass("jugador1")
            } else if (ganador === 2) {
                //Me da pereza buscar como hacer para que no se pueda seguir poniendo fichas
                $("#p").text("Ganador "+player2);
                $(".casilla").removeClass("jugador1")
                $(".casilla").addClass("jugador2")
            } else if (jugador1.length + jugador2.length === 9) {
                $("#p").text("¡Empate!");
            }
        }
        $("#turno").text("Turno: "+contador);
    });
    $("#boton").click(function(){
        jugador1=[];
        jugador2=[];
        contador=0;
        $("#turno").text("Turno: "+contador);
        $(".casilla").removeClass("jugador1").removeClass("jugador2")
    })
});

function verificarGanador() {
    let lineasGanadoras = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    let ganador = 0;

    lineasGanadoras.forEach(function(linea) {
        if (jugador1.includes(linea[0]) && jugador1.includes(linea[1]) && jugador1.includes(linea[2])) {
            ganador = 1;
        } else if (jugador2.includes(linea[0]) && jugador2.includes(linea[1]) && jugador2.includes(linea[2])) {
            ganador = 2;
        }
    });
    return ganador;
}
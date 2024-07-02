import {  pedirCarta,valorCarta} from "./";
import { crearCartaHTML } from "./crear-carta-html";



/**
 * turno de la computadora
 * @param {HTMLElement} puntosHtml elemento Html para mostrarlos puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Number} puntosMinimos puntos minimos q la computadora necesita para ganar 
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck=[] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos es necesario');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');


    let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta= crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

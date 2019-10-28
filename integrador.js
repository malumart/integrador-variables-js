let nombreTienda = "Malu Shop";
let prodPromo1 = "Blazer Negro";
let prodPromo2 = "Vestido Fiesta";
let precioProd1 = 900;
let precioProd2 = 800;
let unidadesProd1 = 0;
let unidadesProd2 = 0;
let cuotas = 0;
let codigoDescuento = "10OFF";

//1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
let nombreUsuario = prompt(`Bienvenido a ${nombreTienda}! Por favor, diganos su nombre:`);

//2. Mostrarle los productos en promoción (2 productos)
alert(`Tenemos estos productos en promocion: ${prodPromo1} y ${prodPromo2}`);

//3. Preguntarle si quiere comprar el producto 1.

let respuestaUsuario = prompt(`Desea comprar ${prodPromo1} ?`);
 //a. Si responde "SI" preguntar cuántas unidades va a llevar
respuestaUsuario == "si" && (unidadesProd1 = prompt(`Cuantas unidades desea comprar?`));

//4. Preguntarle si quiere comprar el producto 2.
respuestaUsuario = prompt(`Desea comprar ${prodPromo2} ?`);
     //a. Si responde "SI" preguntar cuántas unidades va a llevar
respuestaUsuario == "si" && (unidadesProd2 = prompt(`Cuantas unidades desea comprar?`));

//5. Mostrar el detalle de la compra con:
     // - subtotales de cada producto (precio x cantidad) 
      //- total (suma de subtotales)
(unidadesProd1 && unidadesProd2) &&
    alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1} = $ ${unidadesProd1 * precioProd1}
    y ${unidadesProd2} unidades de ${prodPromo2} = $ ${unidadesProd2 * precioProd2}. Precio Total: $ ${unidadesProd1 * precioProd1 + unidadesProd2 * precioProd2}`);

(unidadesProd1 != 0 && unidadesProd2 == 0) &&
    alert(`El detalle de su compra es: ${unidadesProd1} unidades de ${prodPromo1}. Precio Total: $ ${unidadesProd1 * precioProd1}` );

(unidadesProd1 == 0 && unidadesProd2 != 0) &&
    alert(`El detalle de su compra es: ${unidadesProd2} unidades de ${prodPromo2}. Precio Total: $ ${unidadesProd2 * precioProd2}`);


//   6. Preguntar si desea abonar con tarjeta de crédito
let tarjetaCredito;
(unidadesProd1 != 0 || unidadesProd2 != 0) && (tarjetaCredito = prompt(`Desea pagar con tarjeta de credito?`));

//   a. Si responde "SI" preguntar en cuántas cuotas desea abonar  
tarjetaCredito == 'si' && (cuotas = prompt(`En cuantas cuotas desea abonar?`));

let precioTotal = unidadesProd1 * precioProd1 + unidadesProd2 * precioProd2;
let montoCuota = precioTotal/cuotas;
// 7. Mostrar el detalle de la compra con:
//- subtotales de cada producto (precio x cantidad) 
//- total (suma de subtotales)
//- si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar

(tarjetaCredito == 'si' && (unidadesProd1 && unidadesProd2) ) &&
alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1} = $${unidadesProd1 * precioProd1}
y ${unidadesProd2} unidades de ${prodPromo2} = $ ${unidadesProd2 * precioProd2}. Precio Total: $ ${precioTotal}. Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota} cada una. `);

(tarjetaCredito == 'si' && (unidadesProd1 != 0 && unidadesProd2 == 0) ) &&
    alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1}. Precio Total: $ ${precioTotal}. Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota} cada una.` );

(tarjetaCredito == 'si' && (unidadesProd1 == 0 && unidadesProd2 != 0) ) &&
    alert(`El detalle de su compra es: ${unidadesProd2} unidades de ${prodPromo2}. Precio Total: $ ${precioTotal}. Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota} cada una.`);


//8. Preguntar si tiene un código de descuento
(unidadesProd1 != 0 || unidadesProd2 != 0) && (respuestaUsuario = prompt("Tiene codigo de descuento?"));
//- si la respuesta es "SÍ", pedir que ingrese el código
let codigoIngresado;
respuestaUsuario == "si" && (codigoIngresado = prompt("Ingrese el codigo de descuento en mayúsculas"));
//- mostrar si el código ingresado es correcto o incorrecto
(codigoIngresado == codigoDescuento) && alert("El codigo ingresado es correcto");
(respuestaUsuario == "si" && (codigoIngresado != codigoDescuento) ) && alert("El codigo ingresado es incorrecto");

// 9. Mostrar el detalle de la compra con:
    //  - subtotales de cada producto (precio x cantidad) 
    // - total (suma de subtotales)
    // - si tiene código y lo ingresó bien, mostrar el descuento y el total final
    // - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
    ((codigoIngresado == codigoDescuento) &&
    (unidadesProd1 && unidadesProd2) && (tarjetaCredito =="no")) &&
    alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1} = $ ${unidadesProd1 * precioProd1}
    y ${unidadesProd2} unidades de ${prodPromo2} = $ ${unidadesProd2 * precioProd2}. Con el cupon obtiene un descuento del 10%. Precio Final: $ ${(precioTotal) * 0.9}`);

    ((codigoIngresado == codigoDescuento) &&
    (unidadesProd1 != 0 && unidadesProd2 == 0) && (tarjetaCredito =="no") )&&
    alert(`El detalle de su compra es: ${unidadesProd1} unidades de ${prodPromo1}. Con el cupon obtiene un descuento del 10%. Precio Final: $ ${(precioTotal) * 0.9}` );

    ((codigoIngresado == codigoDescuento) && (tarjetaCredito =="no") && (unidadesProd1 == 0 && unidadesProd2 != 0) )&&
    alert(`El detalle de su compra es: ${unidadesProd2} unidades de ${prodPromo2}. Con el cupon obtiene un descuento del 10%. Precio Final: $ ${(precioTotal) * 0.9}`);

    
    ((codigoIngresado == codigoDescuento) && (tarjetaCredito == 'si') && (unidadesProd1 && unidadesProd2) ) &&
    alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1} = $${unidadesProd1 * precioProd1}
    y ${unidadesProd2} unidades de ${prodPromo2} = $ ${unidadesProd2 * precioProd2}.
    Con el cupon obtiene un descuento del 10%. Precio Final: $ ${precioTotal* 0.9}. Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota= (precioTotal*0.9)/cuotas} cada una. `);
    
    ((codigoIngresado == codigoDescuento) && (tarjetaCredito == 'si') && (unidadesProd1 != 0 && unidadesProd2 == 0) ) &&
        alert(`El detalle de su compra: ${unidadesProd1} unidades de ${prodPromo1}.
        Con el cupon obtiene un descuento del 10%. Precio Final: $ ${precioTotal* 0.9}
         Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota= (precioTotal*0.9)/cuotas} cada una.` );
    
    ((codigoIngresado == codigoDescuento) && (tarjetaCredito == 'si') && (unidadesProd1 == 0 && unidadesProd2 != 0) ) &&
        alert(`El detalle de su compra es: ${unidadesProd2} unidades de ${prodPromo2}.
        Con el cupon obtiene un descuento del 10%. Precio Final: $ ${precioTotal* 0.9}. 
         Elegiste pagar en ${cuotas} cuotas de $ ${montoCuota= (precioTotal*0.9)/cuotas} cada una.`);
    

// 10. Mostrar un saludo de despedida  

alert (`Muchas gracias por visitar ${nombreTienda}!`);
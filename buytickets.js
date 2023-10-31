

//Total a pagar
function total() {

  
//Definición de variables
  //valor del Ticket
  const valueTk= 200;
  //descuentos
  let descEstudiante = 0.8;
  let descTrainee = 0.5;
  let descJunior = 0.15;
  let descNinguno = 0;

  //elementos de variables
  let cantTick = document.getElementById('amount');
  let categories = document.getElementById('categories');
  let tkPorCant = valueTk * (cantTick.value)

  let totalAPagar = 0;

  if (cantTick > 0) {
    if (categories.value == 0) {
    totalAPagar = tkPorCant - (tkPorCant * descNinguno);
  } else if (categories.value == 1) {
    totalAPagar = tkPorCant - (tkPorCant * descEstudiante);
  } else if (categories.value == 2) {
    totalAPagar = tkPorCant - (tkPorCant * descTrainee);
  } else if (categories.value == 3) {
    totalAPagar = tkPorCant - (tkPorCant * descJunior);
  }
  } else {
    alert('Por favor, ingrese un número positivo.');
  }
  document.getElementById('totPag').innerText = 'Total a Pagar: $ ' + totalAPagar;
}

function limpiar() {
  document.getElementById('totPag').innerText = 'Total a Pagar: $ ';
  //document.getElementById('Name').innerText = 'Nombre';
  //document.getElementById('LastName').innerText = 'Apellido';
  //document.getElementById('Email').innerText = 'Correo ';
  //document.getElementById('amount').innerText = 'cantidad ';
  //document.getElementById('cantidad').reset();
}

var x = document.getElementById('btnResumen');
x.addEventListener('click', total);


var y = document.getElementById('btnBorrar');
y.addEventListener('click', limpiar);




//function descuento(cant, porcentaje) {
    //Dos variables que extraen los valores de dichos elementos(campos numéricos)
    //let n1 = document.getElementById('amount').value;
    //let cant = n1 * 200;
    //let porcentaje = [1, 0.8, 0.5, 0.15];

    //switch (porcentaje) {
      //case document.getElementById('estudiante'):
        //resultado = cant - (cant * porcentaje[1]);
       //break;
      //case document.getElementById('trainee'):
        //resultado = cant - (cant * porcentaje[2]);
        //break;
     //case  document.getElementById('junior'):
        //resultado = cant - (cant * porcentaje[3]);
        //break;
      //default: document.getElementById('general');
        //resultado = cant * porcentaje[0];
        //break;
    //}
  
    //console.log(parseInt(n1) * 200 - (parseInt(n1) 200 * 0.8));
    //console.log(parseInt(n1) * 200 - (parseInt(n1) 200 * 0.5));
    //console.log(parseInt(n1) * 200 - (parseInt(n1) 200 * 0.15));
    //console.log(parseInt(n1) * 200);
  
    //let resultado = parseInt(n1) + parseInt(n2)
  
    //insertar resultado en el nodo span con id = total
    //document.getElementById('totPag').innerText = 'Total a Pagar: $ ' + resultado;
    //console.log(resultado)
  //}


  //let cantEnt = document.getElementById('amount').value;
  //let cantXprec = n1 * 200;
  //let categories = document.getElementById('categories').value;
  //let cate = [document.getElementById('ninAnt').innerText, document.getElementById('estudiante').innerText, document.getElementById('trainee').innerText, document.getElementById('junior').innerText];
  //let porc = [1, 0.8, 0.5, 0.15];

    //if ( estudiante ==document.getElementById('estudiante')) {
    //resultado = cant - (cant * 0.8);
  //} else if (trainee == document.getElementById('trainee')) {
    //resultado = cant - (cant * 0.5);
  //} else if (junior == document.getElementById('junior')) {
    //resultado = cant - (cant * 0.15);
  //} else if (ninguno == document.getElementById('ninguno')) {
    //resultado = cant - (cant * 0.15);
  //} else {
    //resultado = cant;
  //}



  //let cate = [document.getElementById('ninAnt'), document.getElementById('estudiante'), document.getElementById('trainee'), document.getElementById('junior')];


  //let estudiante = document.getElementById('estudiante');
  //let trainee = document.getElementById('trainee');
  //let junior = document.getElementById('junior');
  //let ninAnt = document.getElementById('ninAnt');
  

  //switch (cate) {
    //case categories == cate[1]:
      //resultado = cant - (cant * porc[1]);
      //break;
    //case categories == cate[2]:
      //resultado = cant - (cant * porc[2]);
      //break;
   //case categories == cate[3]:
      //resultado = cant - (cant * porc[3]);
      //break;
    //default: categories == cate[0];
      //resultado = cant;
      //break;
  //}

  //function cantidadPagar() {
    //document.getElementById('totPag').innerText = 'Total a Pagar: $ ' + resultado;
  //}

  
  //function limpiar() {
    //document.getElementById('totPag').innerHTML = 'Total a Pagar: $ ';
    //document.getElementById('Name').innerHTML = 'Nombre';
    //document.getElementById('LastName').innerHTML = 'Apellido';
    //document.getElementById('Email').innerHTML = 'Correo ';
    //document.getElementById('amount').innerHTML = 'cantidad ';
    //document.getElementById('cantidad').reset();
  //}
  
  //var x = document.getElementById('btnResumen');
  //x.addEventListener('click', cantidadPagar);
  
  
  //var y = document.getElementById('btnBorrar');
  //y.addEventListener('click', limpiar);


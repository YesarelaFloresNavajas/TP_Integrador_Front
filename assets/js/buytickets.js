  //valor del Ticket
const valueTk= 200;
  //descuentos
let descEstudiante = 0.8;
let descTrainee = 0.5;
let descJunior = 0.15;

  //elementos en variables
let nombre = document.getElementById('Name');
let errorNombre = document.getElementById('msErrorName');
let apellido = document.getElementById('LastName');
let errorApellido = document.getElementById('msErrorLastName');
let email = document.getElementById('Email');
let errorEmail = document.getElementById('msErrorEmail');
let amount = document.getElementById('Amount');
let errorAmount = document.getElementById('msErrorAmount');
let categories = document.getElementById('categories');
let errorCategories = document.getElementById('msErrorCategories');
//let errorCampos = document.getElementById('errorCampos');

//función para quitar el estilo de error a los elementos del formulario
const quitarClError = () => {
  let elemento = document.querySelectorAll(".form-control, .form-select");
  for (let i = 0; i < elemento.length; i++) {
      elemento[i].classList.remove('is-invalid');
  }
  let elementoinv = document.querySelectorAll(".invalid-feedback");
  for (let i = 0; i < elementoinv.length; i++) {
      elementoinv[i].classList.remove('own');
  }
}


//Total a pagar
const total = () => {
//function total() {
  
//ejecuto la función para que quite los estilos de error en los campos que lo tienen
  quitarClError();


  const nombreVálido = nombre => {
    return /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre);
}

if (!nombreVálido(nombre.value)) {
    //alert('Por favor, escribí tu nombre.');
    nombre.classList.add('is-invalid');
    errorNombre.classList.add('own');
    //la clase pone un div enn display:block, ya que tiene la class="invalid-feedback "
    nombre.focus()
    return;
}

const apellidoVálido = apellido => {
    return /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(apellido);
}

if (!apellidoVálido(apellido.value)) {
    //alert('Por favor, escribí tu apellido')
    apellido.classList.add('is-invalid');
    errorApellido.classList.add('own');
    lastName.focus();
    return;
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@)]+\.[^\s@]+$/.test(email); //expresión regular
}
if (!emailVálido(email.value)) {
    //alert('Por favor, escribí un correo válido.')
    email.classList.add('is-invalid');
    errorEmail.classList.add('own');
    email.focus();
    return;
}

//verifico que al menos ingrese 1 ticket, sino que aplique un estilo de erros, haga foco en el campo y se detenga
//const amountVálido = amount => {
  //return  [!(amount.value <= 0) || !(isNaN(amount.value))].test(amount);
//}

if ((amount.value <= 0) || (isNaN(amount.value))) {
    //alert('Por favor, ingresá correctamente una cantidad de tickets.')
    amount.classList.add('is-invalid');
    errorAmount.classList.add('own');
    amount.focus();
    return;
}

//verifico que se seleccione una categoría
if (categories.value === "") {
    //alert('Por favor, elegí una categoría');
    categories.classList.add('is-invalid');
    errorCategories.classList.add('own');
    categories.focus();
    return;
}

//variable con el valor de la cantidad de ticket por el valor de cada ticket
let totalAPagar = (amount.value) * valueTk;
  switch (categories.value) {
    case "0":
      totalAPagar = totalAPagar;
      break;
    case "1":
      totalAPagar = totalAPagar - (totalAPagar * descEstudiante);
      break;
    case "2":
      totalAPagar = totalAPagar -(totalAPagar * descTrainee);
      break;
    case "3":
      totalAPagar = totalAPagar - (totalAPagar * descJunior);
      break;
  } 

  //inserto el valor total en el html 
  // document.getElementById('totPag').innerHtml = totalAPagar;
  return document.getElementById('totPag').innerText = 'Total a Pagar: $ ' + totalAPagar;
}
 //manera hecha al principio
  //if (amount > 0) {
    //if (categories.value == 0) {
    //totalAPagar = tkPorCant - (tkPorCant * descNinguno);
  //} else if (categories.value == 1) {
    //totalAPagar = tkPorCant - (tkPorCant * descEstudiante);
  //} else if (categories.value == 2) {
    //totalAPagar = tkPorCant - (tkPorCant * descTrainee);
  //} else if (categories.value == 3) {
    //totalAPagar = tkPorCant - (tkPorCant * descJunior);
  //}
  //} else {
    //alert('Por favor, ingrese un número positivo.');
  //}
  //return document.getElementById('totPag').innerText = 'Total a Pagar: $ ' + totalAPagar;


//botón Resumen al hacer click realiza la función total
//btnResumen.addEventListener('click', total);

//función para el botón borra, para borrar los valores

const limpiar = () => {
  quitarClError();
  document.getElementById('totPag').innerText = 'Total a Pagar: $ ';


  //función al principio
  //function limpiar() {
    //document.getElementById('totPag').innerText = 'Total a Pagar: $ ';
    //document.getElementById('Name').innerText = 'Nombre';
    //document.getElementById('LastName').innerText = 'Apellido';
    //document.getElementById('Email').innerText = 'Correo ';
    //document.getElementById('amount').innerText = 'cantidad ';
    //document.getElementById('cantidad').reset();
  
}

//btnBorrar.addEventListener('click', limpiar);

//variables para ejecutar 
var x = document.getElementById('btnResumen');
x.addEventListener('click', total);


var y = document.getElementById('btnBorrar');
y.addEventListener('click', limpiar);


//pruebas para lograr hacer el ejercicio


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


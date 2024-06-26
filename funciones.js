
function irAlCarro() {
    $('#modal-carro').modal('show');
    var rowCount = $('#tablaLibros tbody tr').length;
    if (rowCount == 0) {
        $('#tablaLibros').hide();
        $('#valorTotal').hide();
        $('#btnComprar').hide();

        $('#existeLibro').show();
    }
    else {
        $('#valorTotal').show();
        $('#btnComprar').show();

        $('#existeLibro').hide();
        $('#tablaLibros').show();
    }
}

function anadirAlCarro(element) {
    var $element = $(element);
    var msg = '';
    var nombre = $element.parent().data('nombre');
    var genero = $element.parent().data('genero');
    var precio = $element.parent().data('precio');
    var cantidad = $element.siblings('.cantidad').val();
    if (cantidad == "" || isNaN(parseInt(cantidad)) || parseInt(cantidad) <= 0) {
        msg += 'Debe ingresar una cantidad válida';
    }
    console.log(nombre, genero, precio, cantidad);
    console.log(cantidad, '1');

    if (msg != '') {
        alert(msg);
        return;
    }

    $('#tablaLibros tbody').append(`
        <tr>
            <td>${nombre}</td>
            <td>${genero}</td>
            <td>${precio}</td>
            <td><input type="number" onblur="actualizarPrecio();" value="${cantidad}" min="1"></td>
            <td><button class="btn" onclick="EliminarFila(this);"><i class="mdi mdi-trash-can-outline"></i></button></td>            
        </tr>
    `);
    actualizarPrecio();
    alert('Libro añadido al carro');
}

function EliminarFila(element) {
    var $element = $(element);
    $($element).closest('tr').remove();
    if ($('#tablaLibros tbody tr').length == 0) {
        $('#tablaLibros').hide();
        $('#valorTotal').hide();
        $('#existeLibro').show();
        $('#btnComprar').hide();
        
    } else {

        actualizarPrecio()
    }
}

function actualizarPrecio() {
    var total = 0;
    $('#tablaLibros tbody tr').each(function () {
        var precio = $(this).find('td').eq(2).text();
        var cantidad = $(this).find('td input').val();
        total += parseInt(precio) * parseInt(cantidad);
        $('#textoValor').text("Total a pagar: " + total.toString());
    });

}

function ComprarLibros() {
    alert("Compra realizada con éxito");
    $('#modal-carro').modal('hide');
    $('#tablaLibros tbody tr').each(function () {
        $(this).closest('tr').remove();
    });
}

function FiltrarLibros() {
    $('#Existencias').hide();
    $('#listaLibros').show();
    var genero = ($('#generoLibro').val() || '').toUpperCase();
    if (parseInt(genero) == 0) {
        genero = '';
    }
    var precio = $('#precioLibro').val() || '';
    var nombre = ($('#nombreLibro').val() || '').toUpperCase();
    console.log(genero, precio, nombre);
    var contador = 0;
    $('#bookList > div').each(function () {
        var book = $(this);
        book.hide();
        contador = contador + 1;
    });
    var contadorMostrar = contador;
    $('#bookList > div').each(function () {
        var book = $(this);
        var bookNombre = book.data('nombre').toUpperCase();
        var bookPrecio = book.data('precio');
        var bookGenero = book.data('genero').toUpperCase();

        console.log(bookNombre, bookPrecio, bookGenero);
        var matchNombre = nombre ? bookNombre.includes(nombre) : true;
        var matchPrecio = precio ? bookPrecio <= precio : true;
        var matchGenero = genero ? bookGenero == genero : true;

        if (matchNombre && matchPrecio && matchGenero) {
            book.show();
            contadorMostrar = contadorMostrar - 1;
        }
    });
    if (contador == contadorMostrar) {
        $('#Existencias').show();
        $('#listaLibros').hide();


    }
}


function IniciarSesion() {
    var msg = '';
    var contrasena = $('#password').val();
    var email = $('#email').val();
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === '' || contrasena === '') {
        msg = msg + '\nPor favor, rellene todos los campos.';
    }
    if (!regex.test(email)) {
        msg = msg + '\nPor favor, introduzca un correo electrónico válido.';
    }
    
    if (msg != '') {
        alert(msg);
        return;
    }

    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html';

}



function Registrarse() {
    var msg = '';
    var contrasena = $('#password').val();
    var contrasena2= $('#passwordConfirm').val();
    var email = $('#email').val();
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === '' || contrasena === '' || contrasena2 === '') {
        msg = msg + '\nPor favor, rellene todos los campos.';
    }
    if (!regex.test(email)) {
        msg = msg + '\nPor favor, introduzca un correo electrónico válido.';
    }
    if (contrasena != contrasena2) {
        msg = msg + '\nLas contraseñas deben coincidir';
    }
    if ( $('#terms').is(':checked') == false) {
        msg = msg + '\nDebe aceptar los términos y condiciones';
    }
    
    if (msg != '') {
        alert(msg);
        return;
    }

    alert('Registro exitoso');
    window.location.href = 'index.html';

}


function pintarNavBar() {
    var navbar = `
    <nav class="navbar navbar-expand-lg navbar-personalizado">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-personalizado" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-personalizado" href="libros.html">Libros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-personalizado" href="nosotros.html">Nosotros</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link nav-link-personalizado" href="registro.html">Registrar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-personalizado" href="iniciarSesion.html">Iniciar Sesion</a>
                </li>
            </ul>
        </div>
    </nav>
    `;

    document.getElementById('navbar').innerHTML = navbar;
}

function irAlCarro() {
    $('#modal-carro').modal('show');
    var rowCount = $('#tablaLibros tbody tr').length;
    if (rowCount==0) {
        $('#tablaLibros').hide();
        $('#valorTotal').hide();

        $('#existeLibro').show();
    }
    else 
    {
        $('#valorTotal').show();

        $('#existeLibro').hide();
        $('#tablaLibros').show();
    }

}

function anadirAlCarro(element) {
    var $element = $(element);
    var msg='';
    var nombre = $element.parent().data('nombre');
    var genero = $element.parent().data('genero');
    var precio = $element.parent().data('precio');
    var cantidad = $element.siblings('.cantidad').val();
    if (cantidad == "" || isNaN(parseInt(cantidad)) || parseInt(cantidad)<=0) {
        msg += 'Debe ingresar una cantidad válida';
    }
    console.log(nombre, genero,precio,cantidad);
    console.log(cantidad,'1');

    if (msg!='') {
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
    if ($('#tablaLibros tbody tr').length==0) {
        $('#tablaLibros').hide();
        $('#valorTotal').hide();
        $('#existeLibro').show();
    }else {

        actualizarPrecio()
    }
}

function actualizarPrecio() {
    var total=0;
    $('#tablaLibros tbody tr').each(function() {
        var precio = $(this).find('td').eq(2).text();
        var cantidad = $(this).find('td input').val();
        total += parseInt(precio)*parseInt(cantidad);
        $('#textoValor').text("Total a pagar: "+ total.toString());
    });

}

function ComprarLibros() {
   alert("Compra realizada con éxito");
    $('#modal-carro').modal('hide');
    $('#tablaLibros tbody tr').each(function() {
        $(this).closest('tr').remove();
    });
}

function FiltrarLibros() {
    $('#Existencias').hide();
    $('#listaLibros').show();
    var genero = ($('#generoLibro').val() || '').toUpperCase();
    if (parseInt(genero)==0) {
        genero = '';
    }     
    var precio = $('#precioLibro').val() || '';
    var nombre = ($('#nombreLibro').val() || '').toUpperCase();
    console.log(genero,precio,nombre);
    var contador=0;
    $('#bookList > div').each(function() {
        var book = $(this);
        book.hide();
        contador=contador+1;
    });
    var contadorMostrar = contador;
    $('#bookList > div').each(function() {
        var book = $(this);
        var bookNombre = book.data('nombre').toUpperCase();
        var bookPrecio = book.data('precio');
        var bookGenero = book.data('genero').toUpperCase();

        console.log(bookNombre,bookPrecio,bookGenero);
        var matchNombre = nombre ? bookNombre.includes(nombre) : true;
        var matchPrecio = precio ? bookPrecio <= precio : true;
        var matchGenero = genero ? bookGenero == genero : true;

        if (matchNombre && matchPrecio && matchGenero) {
            book.show();
            contadorMostrar=contadorMostrar-1;
        }
    });
    if (contador==contadorMostrar) {
        $('#Existencias').show();
        $('#listaLibros').hide();


    }
}


function IniciarSesion() {
    var msg='';
    var contrasena=$('#password').val();
    var email=$('#email').val();
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === '' || contrasena === '') {
        msg=msg + 'Por favor, rellene todos los campos.';
    }
    else if (contrasena.length < 8) 
    {
        if (!regex.test(email)) {
            msg=msg +'Por favor, introduzca un correo electrónico válido.';
        }
    }
    if (msg!='') {
        alert(msg);
        return;
    }

    alert('Inicio de sesión exitoso');
    window.location.href = 'index.html';

}


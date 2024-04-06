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
            </ul>
        </div>
    </nav>
    `;

    document.getElementById('navbar').innerHTML = navbar;
}
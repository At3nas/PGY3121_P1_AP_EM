function pintarNavBar() {
    var navbar = `
    <nav class="navbar navbar-expand-lg navbar-personalizado">
        <a class="navbar-brand" href="#">BiblioMarket</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="libros.html">Libros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="nosotros.html">Nosotros</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="registro.html">Registrar</a>
                </li>
            </ul>
        </div>
    </nav>
    `;

    document.body.innerHTML += navbar;
}
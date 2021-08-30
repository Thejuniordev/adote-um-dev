export function Header() {
    return(
        <header>
            <div className="container">
                <div className="content">
                    <h1>
                        <a href="#">
                            <img src="" alt="logo" />
                        </a>
                    </h1>

                    <nav>
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DEVs
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button>Acessar</button>
                </div>
            </div>
        </header>
    )
}
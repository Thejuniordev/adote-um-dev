import Image  from 'next/image';

import Logo from '../../../public/images/logo_adote.png';
import styles  from './header.module.scss';

export function Header() {
    return(
        <header>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.content__logo}>
                        <a href="#">
                            <Image src={Logo} alt="Logo" layout="fill" />
                        </a>
                    </h1>

                    <nav className={styles.content__navbar}>
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

                    <button className="btn btn__medium btn__primary">Acessar</button>
                </div>
            </div>
        </header>
    )
}
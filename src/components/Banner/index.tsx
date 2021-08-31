import styles from './banner.module.scss';

export function Banner() {
    return(
        <section className={styles.banner}> 
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.content__title}>Adote um Dev</h2>
                    <p className={styles.content__text}>Se você já sentiu vontade de apadrinhar um Dev, esse é o lugar certo.</p>
                    <button className="btn btn__medium btn__blue">Quero adotar</button>
                </div>
            </div>
        </section>
    )
}
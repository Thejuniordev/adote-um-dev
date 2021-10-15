import styles from './about.module.scss';

export function About() {
    return(
        <section className={styles.about}> 
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.content__title}>Sobre o ADOTE UM DEV</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis hic exercitationem aspernatur ducimus necessitatibus beatae. Dolore porro aperiam aliquid. Totam rerum molestias dolor! Hic quisquam dolores minus aspernatur ab soluta?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quod dicta ab architecto fugit eveniet. Reiciendis ad sit, exercitationem, veniam deserunt dolores recusandae tempora vero amet, quibusdam placeat deleniti mollitia?</p>
                </div>
                <div className={styles.buttons}>
                    <button className="btn btn__medium btn__blue">Quero adotar</button>
                    <button className="btn btn__large btn__primary">Quero ser adotado</button>
                </div>
            </div>
        </section>
    )
}
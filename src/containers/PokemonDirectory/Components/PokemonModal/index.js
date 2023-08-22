import styles from "./style.module.css"

const PokemonModal = () => {
    return (
        <div>
            <a href="#modal" className={styles.modalBtn}>Open modal</a>

            <div className={styles.modalOverlay} id="modal">
                <div className={styles.modal}>
                    <div className={styles.row}>
                        <div className={styles.column}>Hey ! </div>
                        <div className={styles.column}>
                            <h1>Charizard</h1>
                            <h3>Generation 1</h3>
                            <div>
                                <h3>Abilities</h3>
                                <h3>Overgrow - cholorophyll</h3>
                            </div>
                            <div>
                                <h3>Healthy Points</h3>
                                <h3>100000</h3>
                            </div>
                        </div>
                    </div>
                    <a href="#" className={styles.modalBtn}>Got It</a>
                </div>
            </div>
        </div>
    )
}

export default PokemonModal

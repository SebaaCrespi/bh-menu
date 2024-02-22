import styles from "../styles/page.module.css";

export default function Home() {
    return (
        <>
        <style jsx global>
            {`
                body {
                    margin: 0;
                    background-color: black;
                }
            `}
        </style>
        <main className={styles.main}>
            <div>
                <img src="/bh-menu-comidas.jpg"/>
            </div>
            <div>
                <img src="/bh-menu-tragos.jpg"/>
            </div>
        </main>
        </>
    );
}

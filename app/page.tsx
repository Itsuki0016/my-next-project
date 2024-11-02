import styles from "./page.module.css";


export default function Home(){
  return(
  <section className={styles.top}>
    <div>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.decriptiobn}>私たちは市上をリードしているグローバルテックカンパニーですカンパニーです。</p>
    </div>
    <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
  </section>
  );
}
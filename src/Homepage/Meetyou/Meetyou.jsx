import styles from "./Meetyou.module.css";
import megif from "../megif.gif";

export function Meetyou({ paddingTop }) {
  const face = "~ (´• ω •`)";
  const heart = "♡";

  return (
    <div className={styles.section} style={{ paddingTop: `${paddingTop}vw` }}>
      <img src={megif} className={styles.gif} alt="Meet GIF" />

      <div className={styles.meet}>
        <h3>
          Nice to meet you! {face} <span className={styles.heart}>{heart}</span>
        </h3>
        <p className = {styles.bio}>
          Hi, I’m Meredith! I’m a multidisciplinary designer practicing graphic
          design, UI/UX, web development, and 3D modeling. I’ve always had a
          strong drive to create, and I love pushing beyond my current skill set
          to learn new tools and techniques that help me bring ideas to life.
          I enjoy the balance between visual expression and technical
          problem-solving, which is one of the reasons I’m drawn to programming.
          It challenges me to think differently and ultimately strengthens my
          abilities in both areas. Outside of design, you’ll usually find me
          hiking, working out, spending time with my cat, or daydreaming at a
          coffee shop.
        </p>
      </div>
    </div>
  );
}
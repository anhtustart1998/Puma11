import styles from "./footer.module.css"

const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>Kilo Advanced Systems</div>
        <div className={styles.text}>
          Kilo Advanced Systems © All rights reserved.
        </div>
      </div>
    );
};
  
export default Footer;
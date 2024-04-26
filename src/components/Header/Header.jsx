import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.h_wrapper}>
      <div className={`${styles.h_container} flexCenter paddings innerWidth `}>
        <img src="/src/assets/logo.png" alt="logo" width={100} />
        <div className={`${styles.h_nav} flexCenter`}>
          <a href="#">Resendicies</a>
          <a href="#">Our Values</a>
          <a href="#">Contact Us</a>
          <a href="#"> Get Started</a>
          <button className="button">
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

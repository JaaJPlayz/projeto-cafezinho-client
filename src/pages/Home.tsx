import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.coffeeAsciiDiv}>
          <img src="/image/logo.jpg" alt="cafe" />
          <h1>Venha tomar um cafézinho conosco!</h1>
        </div>
      </div>
    </>
  );
};

export default Home;

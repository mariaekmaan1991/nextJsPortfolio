import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.HomeBigFrame}>
      <Image
        src="/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg"
        alt=""
        width={300}
        height={400}
      />
    </div>
  );
};

export default Home;

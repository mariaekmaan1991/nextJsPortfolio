import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  const imageBox = {
    position: "relative",
    width: "350px",
    height: "700px",
    zIndex: "10",
    top: "100px",
    left: "10%"
  };
  return (
    <>
      <div className={styles.HomeColorFrame}></div>
      <div style={imageBox}>
        <Image
          src="/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Home;

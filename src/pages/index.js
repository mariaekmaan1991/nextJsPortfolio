import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  const imageBox = {
    position: "fixed",
    width: "350px",
    height: "400px",
    zIndex: "2",
    justifyContent: "center",
    display: "flex",
    top: "20%"
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

{
  /*<div style={imageBox}>
        <Image
          //src="/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
          width={500}
          height={500}
        />*
      </div>*/
}

import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.HomeColorFrame}></div>
      <div className={styles.HomeHeadlineBox}>Välkommen till mitt profolio</div>
      {/* <div style={imageBox} className={styles.HomeColorFrame}>*/}
      <div className={styles.HomeBoxImage}>
        <Image
          src="/behrouz-sasani-1B22UBPK1Pw-unsplash.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
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

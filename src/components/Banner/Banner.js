import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="cont-carousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72"
            alt="Battle Field 2042"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1911/2019_Call_of_Dut_Mobile_Game_HD_Poster_1366x768.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://playreplay.com.br/wp-content/uploads/2019/08/no-mans-sky-beyond-vr-ps4-xbox-pc-1-e1566943409940.jpg"
            alt="No Men Sky"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.10wallpaper.com/wallpaper/1366x768/1911/Scorpion_Mortal_Kombat_X_2019_Game_HD_Poster_1366x768.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

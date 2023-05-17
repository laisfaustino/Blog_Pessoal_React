// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import {Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://i.pinimg.com/736x/d0/d9/d2/d0d9d227fdd948b92e14f49bd5291210.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.pinimg.com/736x/b6/1a/89/b61a89af2aab0c13a9f623bc9600dc37.jpg" alt="Gif cactus" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.vexels.com/media/users/3/150346/raw/54037a73296a1ad60f753f3156ab3177-conjunto-de-ilustracion-de-dibujos-animados-de-cactus.jpg" alt="Gif Cactus" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://media2.giphy.com/media/l41YlE1Scus5I2cfu/giphy.gif?cid=ecf05e47lswzheoji1fbdcctkys8dhwv8gpv986awcy589xz&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Gif Cactus" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel
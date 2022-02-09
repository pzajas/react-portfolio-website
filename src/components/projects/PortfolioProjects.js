import * as style from "../../variables/Variables"
import StyledPrimarySectionTitle from "../../elements/titles/PrimaryTitle"
import StyledSecondarySectionTitle from "../../elements/titles/SecondaryTitle"
import styled from "styled-components"

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper"

// Import Swiper styles

import "swiper/css/bundle"

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 0rem;
  height: 100vh;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};

  margin-bottom: ${style.PrimaryMarginBottom};
  padding: 1rem 2rem 1rem 2rem;
  scroll-snap-align: start;

  img {
    width: 80vw;
    height: 60vh;
    border-radius: 0.2rem;
  }

  img:hover {
    backdrop-filter: blur(5px);
    filter: blur(2px) brightness(80%);
    transition: 0.5s ease;
    cursor: pointer;
  }
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    opacity: 0.1;

    &:hover {
      opacity: 1;
    }
  }

  .swiper-pagination-progressbar {
    background-color: ${style.PrimaryColor};
    position: absolute;
    top: 60vh;
  }

  .swiper-pagination-progressbar-fill {
    background-color: ${style.SecondaryColor};
  }
`

const PortfolioProjects = ({ myRef }) => {
  return (
    <StyledProjectsContainer ref={myRef}>
      <StyledPrimarySectionTitle primarySectionText="My latest works!"></StyledPrimarySectionTitle>
      <StyledSecondarySectionTitle secondarySectionText="React projects"></StyledSecondarySectionTitle>
      <StyledSwiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        autoplay={{
          loop: true,
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        slidesPerView={"auto"}
        effect={"fade"}
        fadeEffect={{ crossFade: false }}
        speed={1500}
        spaceBetween={10}
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
      </StyledSwiper>
    </StyledProjectsContainer>
  )
}

export default PortfolioProjects

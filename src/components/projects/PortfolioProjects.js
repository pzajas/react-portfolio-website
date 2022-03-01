import "swiper/css/bundle"

import styled from "styled-components"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img5 from "../../assets/img5.png"
import StyledPrimarySectionTitle from "../../elements/titles/PrimaryTitle"
import StyledSecondarySectionTitle from "../../elements/titles/SecondaryTitle"
import PortfolioSkills from "../skills/PortfolioSkills"
import * as style from "../../variables/Variables"
import PortfolioProjectsCard from "./PortfolioProjectsCard"

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 0rem;
  height: 90vh;
  background-color: ${style.PrimaryColor};
  color: ${style.TeriaryColor};

  margin-bottom: ${style.PrimaryMarginBottom};
  padding: 5vh 2rem 5vh 2rem;
  scroll-snap-align: start;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 60vh;
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    opacity: 0;
    position: absolute;
    top: 30vh;
    cursor: pointer;
  }

  &:hover {
    backdrop-filter: blur(10px);

    .swiper-button-prev,
    .swiper-button-next {
      opacity: 0.1;
    }
  }

  .swiper-pagination-progressbar {
    background-color: ${style.PrimaryColor};
    position: absolute;
    top: 55.5vh;
  }

  .swiper-pagination-progressbar-fill {
    background-color: ${style.SecondaryColor};
  }
`

const StyledWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
  }

  &:hover {
    & * {
      transition: all 2s ease;
      opacity: 1;
    }

    img {
      filter: blur(2px) brightness(40%);
    }
  }
`

const StyledPortfolioProjectsCard = styled(PortfolioProjectsCard)``

const PortfolioProjects = ({ myRef }) => {
  const projectImages = [{ image: <StyledPortfolioProjectsCard img={img2} text="Title" /> }]

  return (
    <StyledProjectsContainer ref={myRef}>
      <StyledPrimarySectionTitle primarySectionText="My recent projects!"></StyledPrimarySectionTitle>
      <StyledSwiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        autoplay={{
          loop: true,
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        navigation={true}
        slidesPerView={"auto"}
        effect={"fade"}
        fadeEffect={{ crossFade: false }}
        speed={1500}
        spaceBetween={10}
      >
        {projectImages.map(projectImage => (
          <SwiperSlide>
            <StyledWrapper>{projectImage.image}</StyledWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledProjectsContainer>
  )
}

export default PortfolioProjects

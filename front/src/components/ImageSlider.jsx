import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ImageSliderContainer = styled.div`
  padding-top: 40px;
`;

const ImageSliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.img`
  margin: 0 auto;
  width: 512px;
  height: 384px;
  object-fit: cover;
`;

const ImageSlider = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliders = [
    {
      url: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    },
    {
      url: "https://images.pexels.com/photos/4587982/pexels-photo-4587982.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlider = currentIndex === sliders.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <ImageSliderContainer>
      <ImageSliderWrapper>
        <div
          style={{ cursor: "pointer" }}
          className="left-button"
          onClick={() => prevSlider()}
        >
          <BsChevronCompactLeft size={32} />
        </div>
        <ImageContainer
          src={sliders[currentIndex].url}
          alt={`Slider ${currentIndex}`}
        />
        <div
          style={{ cursor: "pointer" }}
          className="right-button"
          onClick={() => nextSlider()}
        >
          <BsChevronCompactRight size={32} />
        </div>
      </ImageSliderWrapper>
    </ImageSliderContainer>
  );
};

export default ImageSlider;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 2;
  bottom: 15px;
  right: 15px;
`;

const Button = styled.button`
  width: 30px;
  height: 7px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: white;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  margin: 0px 5px 0px 5px;
  bottom: 0px;
  transition: 400ms all ease-in-out;
`;

const Container = styled.div`
  height: 54vh;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.img`
  height: 125%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

const Title = styled.div`
  color: white;
  z-index: 2;
  position: absolute;
  bottom: 2.5em;
  left: 1em;
  font-size: 20px;
  font-weight: 100;
`;

const Gradient = styled.div`
  width: 100%;
  height: 25%;
  position: absolute;
  z-index: 1;
  bottom: 0px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), black 100%);
`;

const BannerButtons = ({currentIndex, bannersLength, onClick}) => {
  const buttons = [];
  for (let i = 0; i < bannersLength; i++) {
    buttons[i] = (
      <Button
        key={`banner-${i}`}
        isActive={currentIndex === i}
        onClick={() => onClick(i)}
      />
    );
  }

  return <ButtonWrapper>{buttons}</ButtonWrapper>;
};

const BannerSlider = ({banners = [], transitionTime = 5000}) => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const updateBannerIndex = index => {
    setBannerIndex(index >= banners.length ? 0 : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateBannerIndex(bannerIndex + 1);
    }, transitionTime);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerIndex]);

  const {
    data: {
      title,
      main_image: {url, alt},
    },
  } = banners[bannerIndex];

  return (
    <Container>
      <Title>{title.split('-')[0]}</Title>
      <Banner src={url} alt={alt} />
      <Gradient />
      <BannerButtons
        currentIndex={bannerIndex}
        bannersLength={banners.length}
        onClick={updateBannerIndex}
      />
    </Container>
  );
};

export default BannerSlider;

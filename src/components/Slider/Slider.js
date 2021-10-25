import {  useEffect, useState, useRef } from "react";
import classnames from 'classnames';
import Banner from "../banner/Banner";
import styles from './Slider.module.scss';

const Slider = ({list,height}) => {


    const [activeItem, setActiveItem] = useState(1);
    const [valueItem, setValueItem] = useState(0);
    const sliderRef = useRef(null);
  
    const listSlider = [
      list[list.length - 1],
      ...list,
      list[0],
    ];
  
    const onTransitionEndListener = () => {
      const isLastSlide = activeItem >= list.length + 1;
      const isFirstSlide = activeItem <= 0;
  
      sliderRef.current.style.transition = "none";
      setActiveItem((state) => {
        if (isLastSlide) {
          return 1;
        }
        if (isFirstSlide) {
          return list.length;
        }
  
        return state;
      });
    };
  
    const handleBtn = (side) => {
      sliderRef.current.style.transition = "transform 300ms ease-in-out";
  
      side ? setActiveItem((x) => x + 1) : setActiveItem((x) => x - 1);
    };
  
    useEffect(
      (_) => {
        setValueItem(-activeItem);
      },
      [activeItem]
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        sliderRef.current.style.transition = "transform 300ms ease-in-out";
        setActiveItem((x) => x + 1);
      }, 2000);
      return () => clearInterval(interval);
    });
    return (
        <div  className={classnames(styles.bannerContainer)}>
        <div
          onClick={(_) => handleBtn(0)}
          className={classnames(styles.bannerContainerArrowLeft)}
        >
          &#8249;
        </div>

        <div
          style={{ transform: `translateX(${valueItem * 100}%)` }}
          className={classnames(styles.bannerContainerInnerBanner)}
          onTransitionEnd={onTransitionEndListener}
          ref={sliderRef}
        >
          {listSlider.length > 0
            ? listSlider.map((item, i) => (
                <Banner  key={`banner_${i}`} {...item} />
              ))
            : null}
        </div>

        <div
          onClick={(_) => handleBtn(1)}
          className={classnames(styles.bannerContainerArrowRight)}
        >
          &#8250;
        </div>
      </div>
    )
}

export default Slider

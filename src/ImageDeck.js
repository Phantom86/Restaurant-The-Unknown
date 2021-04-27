import React from 'react';  //import react for this file is important
import './App.css'; //import the css file
import { SliderData } from './SliderData'; //import the sliderdata from SliderData.js




  const Home = () => {

  //delay of the slide
  const delay = 5500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section className='slider'>
       
      {SliderData.map((slide, current) => {
    
          return (
          <div
            className={current === index ? 'slide active' : 'slide'}
            key={current}
          >
            {current === index && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
            })}
    

      <div className="slideshowDots">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>        
      
    </section>
    );
  
};
 

//export the Home function
export default Home;
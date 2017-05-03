import React from 'react';
import Slider from 'material-ui/Slider';

const SliderFilter = ({ minRange, maxRange, step=1, onChange, value, label }) => { 
  const handleChange = (e, value) => onChange(value);
  const styles = {
    sliderWrapper: {
      display: "flex",
      marginTop: 20
    },
    sliderRoot: {
      flex: "1 1 auto",
      margin: "0 10px"
    },
    slider: {
      margin: "0"
    }
  };
  
  return (
    <div>
      <span>{ label }</span>
      <span className="current-value">{ value }</span>
      <section className="slider-wrapper" style={ styles.sliderWrapper }>
        <span>{ minRange }</span>
        <Slider
          min={ minRange }
          max={ maxRange }
          step={ step }
          value={ value }
          onChange={ handleChange }
          style={ styles.sliderRoot }
          sliderStyle={ styles.slider }
        />
        <span>{ maxRange }</span>
      </section>
    </div>
  ) 
}

export default SliderFilter
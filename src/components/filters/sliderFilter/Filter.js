import React from 'react';
import Slider from 'material-ui/Slider';

const SliderFilter = ({minRange, maxRange, step=1, onChange, value}) => { 
  const handleChange = (e, value) => onChange(value);
  
  return (
    <div className="slider-wrapper">
      <span className="current-value">{ value }</span>
      <section>
        <span>{ minRange }</span>
        <Slider
          min={ minRange }
          max={ maxRange }
          step={ step }
          value={ value }
          onChange={ handleChange }
        />
        <span>{ maxRange }</span>
      </section>
    </div>
  ) 
}

export default SliderFilter
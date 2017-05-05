// @flow
import React from 'react';
import Slider from 'material-ui/Slider';
import styles from './Styles';

type Props = {
  minRange: number, 
  maxRange: number, 
  step?: number, 
  onChange: Function, 
  value?: number, 
  label?: string 
};

const SliderFilter = ({ 
  minRange= 0,
  maxRange, 
  step= 1, 
  onChange, 
  value, 
  label 
} : Props ) : React$Element<any> => { 

  const handleChange = (e, value) => onChange(value);  

  return (
    <div>
      <label style={ styles.sliderLabel }>{ label }</label>
      <span style={ styles.currentValue }>{ value }</span>
      <section className="slider-wrapper" style={ styles.sliderWrapper }>
        <span>{ minRange }</span>
        <Slider
          min={ minRange }
          max={ maxRange }
          step={ step }
          value={ value !== undefined ? value : maxRange }
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
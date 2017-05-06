// @flow
import React from 'react';
import { Icon } from 'react-fa';
import styles from './Styles';

type Props = { label: string };

const Loader = ({ label="" } : Props) : React$Element<any> => (
  <div style={ styles.wrapper }>
    { 
      label.length && (
        <span style={ styles.label }>{ label }</span>
      )
    }
    <Icon spin size="lg" name="spinner" />
  </div>
)

export default Loader;
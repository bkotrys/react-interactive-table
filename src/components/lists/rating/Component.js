// @flow
import React from 'react';
import { Icon } from 'react-fa';
import styles from './Styles';

type Props = { count: number };

const RatingList = ({ count = 0 } : Props ) : React$Element<any> => {
  let list = [];

  for(let i = 0; i < count; i++){
    list.push(
      <li key={ i }>
        <Icon style={ styles.icon } name="star" />
      </li>)
  }

  return (
    <ul style={ styles.ul }> { list } </ul>
  )
};

export default RatingList;
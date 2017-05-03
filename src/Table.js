import React from 'react';
import { petService } from './service';

petService.fetch().then(
  console.log.bind(console, 'SUCCESS:'),
  console.error.bind(console, 'ERROR:')
);

export default () => <h1>...</h1>

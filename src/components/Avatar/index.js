import React from 'react';

import './index.css';

export default ({ cardAvatar }) => (
  <span className={'avatar'}>
    <img src={ cardAvatar } alt='' />
  </span>
)

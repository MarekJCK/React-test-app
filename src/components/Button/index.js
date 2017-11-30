import React from 'react';

import './index.css';

export default ({ children, ...props }) => <button { ...props }>{ children }</button>

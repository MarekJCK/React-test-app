import React from 'react';
import isEmpty from 'lodash/isEmpty'

import List from 'components/List';
import Detail from 'components/Detail';

import './index.css';

export default ({
  people,
  currentPerson,
  onFetchPerson,
  onFormSubmit,
  onDetailClose,
  onCommentDelete
}) => (
  <div className={ 'app' }>
    
    <div className={ 'list-half' }> 
      <List people={ people } onFetchPerson={ onFetchPerson } />
    </div>
    
    <div className={ 'detail-half' }>
      { !isEmpty(currentPerson) &&
        <Detail
          { ...currentPerson }
          onFormSubmit={ onFormSubmit }
          onDetailClose={ onDetailClose }
          onCommentDelete={ onCommentDelete }
        />
      }
    </div>

  </div>
)

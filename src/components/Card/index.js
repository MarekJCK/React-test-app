import React from 'react';

import moment from 'moment';

import Button from 'components/Button';
import Avatar from 'components/Avatar';
import CardHeading from 'components/CardHeading';
import CardTimestamp from 'components/CardTimestamp';
import CardText from 'components/CardText';

import './index.css';

export default ({ _id, date, text, person, onFetchPerson }) => {
  const fullName = `${person.firstName} ${person.lastName}`
  const avatar = `${person.avatar}?${_id}`

  return (
    <div className={ 'card-body' }>
      <div className={ 'card-body-top' }>
        <Avatar cardAvatar={ avatar } />
        <div className={ 'card-body-top-text' }>
          <CardHeading cardHeadingTitle={ fullName } />
          <CardTimestamp cardTimestampText={ moment(date).format('MMMM DD, YYYY') } />
          <CardText cardText={ text } />
        </div>
        <Button className={ 'btn' } onClick={ () => onFetchPerson(_id) }>DETAIL</Button>
      </div>
    </div>
  )
}

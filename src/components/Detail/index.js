import React, { Component } from 'react';

import moment from 'moment';

import CardDetailHeading from 'components/CardDetailHeading';
import CardDetailUsername from 'components/CardDetailUsername';
import Avatar from 'components/Avatar';
import CardText from 'components/CardText';
import CardHeading from 'components/CardHeading';
import CardTimestamp from 'components/CardTimestamp';
import Button from 'components/Button';
import TextInfo from 'components/TextInfo';
import Form from 'components/Form';

import './index.css'

export default class Detail extends Component {

  render() {
    const {
      _id,
      text,
      person,
      date,   
      likesCount,
      commentsCount,
      comments,
      onFormSubmit,
      onDetailClose,
      onCommentDelete
    } = this.props

    return (
      <div className={ 'detail-wrap' }>
        <h1>Detail</h1>

        <div className={ 'card-detail-body' }>
          <div className={ 'card-detail-section-1' }>
            <div className={ 'close-wrap' }>
              <Button className={ 'btn' } onClick={ onDetailClose }>CLOSE</Button>
            </div>
            <Avatar cardAvatar={ person.avatar } />
            <CardDetailHeading cardDetailHeadingTitle={ `${person.firstName} ${person.lastName}` } />
            <CardDetailUsername cardDetailUsernameText={ person.username } />
            <CardText cardText={ text } />
            <div className={ 'card-detail-text-info' }>
              <TextInfo TextInfoProp={`LIKES: ${likesCount}`} />
              <TextInfo TextInfoProp={`COMMENTS: ${commentsCount}`} />
            </div>
          </div>

          <div className={ 'card-detail-section-2' }>
            <div className={ 'card-detail-section-2-inner' }>
              <Form
                feedId={ _id }
                onFormSubmit={ onFormSubmit }
              />
            </div>
          </div>  

          <div className={ 'card-detail-section-3' }>
            { comments.map(comment => (
              <div key={ comment._id } className={ 'card-body-x-wrap' }>
                <div className={ 'card-body-x' }>
                  <div className={ 'card-body-top' }>
                    <Avatar cardAvatar={ `${comment.person.avatar}?${comment._id}` } />
                    <div className={ 'card-body-top-text' }>
                      <CardHeading cardHeadingTitle={ `${comment.person.firstName} ${comment.person.lastName}` } />                   
                      <CardTimestamp cardTimestampText={ moment(date).format('MMMM DD, YYYY') } />
                      <CardText cardText={ comment.text } />
                    </div>  
                    <Button className={ 'btn' } onClick={ () => onCommentDelete( _id, comment._id ) }>
                      X
                    </Button>
                  </div>  
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    )
  }
}

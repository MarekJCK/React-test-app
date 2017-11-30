import React, { Component } from 'react';
import { isEmpty } from 'lodash'

import Button from 'components/Button'

import './index.css';

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      comment: '',
      feedId: this.props.feedId
    }
  }

  state = this.getInitialState()

  isFormValid() {
    const {
      firstName,
      lastName,
      comment
    } = this.state

    return !isEmpty(firstName) &&
      !isEmpty(lastName) &&
      !isEmpty(comment)
  }

  onFieldUpdate(field, event) {
    this.setState({ [field]: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    if (this.isFormValid()) {
      this.props.onFormSubmit(this.state)
      this.setState(this.getInitialState())
    }
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <input
          type="text"
          value={ this.state.firstName }
          onChange={ (event) => this.onFieldUpdate('firstName', event) }
          placeholder={'First Name'}
        />
        <input
          type="text"
          value={ this.state.lastName }
          onChange={ (event) => this.onFieldUpdate('lastName', event) }
          placeholder={'Last Name'}
        />
        <textarea
          type="text"
          onChange={ (event) => this.onFieldUpdate('comment', event) }
          placeholder={'Comment...'}
          value={ this.state.comment }
        />
        <Button
          className={ 'btn' }
        >
          ADD COMMENT
        </Button>
      </form>
    )
  }
}

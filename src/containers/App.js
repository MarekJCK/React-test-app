import React, { Component } from 'react';
import axios from 'axios';

import App from 'components/App';

const API_ENDPOINT = 'https://inloop-webproject.herokuapp.com/api';

export default class AppContainer extends Component {

  constructor(props) {
    super(props)

    this.fetchPerson = this.fetchPerson.bind(this)
    this.setState = this.setState.bind(this)
  }

  state = {
    people: [],
    currentPerson: {}
  }

  fetchPeople() {
    axios.get(`${API_ENDPOINT}/feeds`)
      .then(res => this.setState({ people: res.data }))
  }

  fetchPerson(feedId) {
    axios.get(`${API_ENDPOINT}/feeds/${feedId}`)
      .then(res => this.setState({ currentPerson: res.data }))
  }

  createComment({ firstName, lastName, comment, feedId }) {
    axios.post(`${API_ENDPOINT}/feeds/${feedId}/comments`, {
      person: {
        firstName,
        lastName,
      },
      text: comment
    }).then(res => this.setState({
      currentPerson: Object.assign(this.state.currentPerson, { comments: res.data })
    }))
  }

  deleteComment(feedId, commentId) {
    axios.delete(`${API_ENDPOINT}/feeds/${feedId}/comments/${commentId}`)
      .then(res => this.fetchPerson(feedId))
  }

  componentDidMount() {
    this.fetchPeople()
  }

  render() {
    const { people, currentPerson } = this.state

    return (
      <App
        people={ people }
        currentPerson={ currentPerson }
        onFetchPerson={ this.fetchPerson }
        onFormSubmit={ this.createComment.bind(this) }
        onCommentDelete={ this.deleteComment.bind(this) }
        onDetailClose={() => this.setState({ currentPerson: null })}
      />
    )
  }

}

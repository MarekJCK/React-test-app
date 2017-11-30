import React from 'react'

import Card from 'components/Card'

import './index.css';

export default ({ people, onFetchPerson }) => (
  <div>
    <h1>List</h1>

    { people && 
      <div>
        { people.map(p => (
          <Card
            key={ p.id }
            { ...p }
            onFetchPerson={ onFetchPerson } />
        )) }
      </div>
    }
  </div>
)

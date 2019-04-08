import React from 'react'

const NoMatch = ({ location }) => (
    <div>
      <h3 className="no-match">No match for <code>{location.pathname}</code></h3>
    </div>
  )

export default NoMatch;
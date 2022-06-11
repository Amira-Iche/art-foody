import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
      <h1>Page Not Found :/</h1>
      <h3>
        Go to the Home Page: <Link to="/login"> Home Page</Link>
      </h3>
    </div>
    )
}

export default Error

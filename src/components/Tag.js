import React from 'react'

function Tag({genre, filterTag}) {
  return (
    <li onClick={() => filterTag(genre)} >
      <span>
    {genre.name}
    </span>
    </li>
  )
}

export default Tag
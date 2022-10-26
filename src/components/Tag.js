import React from 'react'
import classNames from 'classnames'

function Tag({genre, filterTag, isSelected}) {
  const tagStyles = classNames('tag', {
    'active_tag': isSelected
  })

  console.log(isSelected)
  return (
    <li onClick={() => filterTag(genre)} >
      <span className={tagStyles} >
    {genre.name}
    </span>
    </li>
  )
}

export default Tag
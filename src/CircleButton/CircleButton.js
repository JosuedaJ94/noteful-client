import React from 'react'
import './CircleButton.css'
import PropTypes from 'prop-types'
import Note from '../Note/Note'

export default function NavCircleButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavCircleButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavCircleButton.defaultProps ={
  tag: 'a',
}

Note.propTypes = {
  tag: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.string,
}
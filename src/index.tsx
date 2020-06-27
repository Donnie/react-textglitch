import * as React from 'react'
import './styles.scss'

interface Props {
  children: React.ReactElement,
}

const Glitch: React.FC<Props> = ({ children }) : React.ReactElement => {
  return React.cloneElement(children, {
    className: `glitch ${children.props.className || ''}`,
    'data-text': children.props.children,
  })
}

export default Glitch

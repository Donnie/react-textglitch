import * as React from 'react'
import './styles.scss'

interface Props {
  text: string;
}

const Glitch: React.FC<Props> = ({ text }) => (
  <span className="glitch-tyu461" data-text={text}>{text}</span>
)

export default Glitch

import "../button/button.css"
import React from "react"

const mostrarLabel = (props) => {
   console.log(`A label desse button é: ${props.label}`)
}

const Button = (props) => {
   return (
      <button className="button" onClick={() => {mostrarLabel(props)}}>{props.label}</button>
   )
}

Button.defaultProps = {
   label: "baixar CV"
}

export default Button
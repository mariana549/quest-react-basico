import "../card/card.css"

const Card = ({color, styleText}) => {
   return (
      <>
      <p className="paragrafro" style={{backgroundColor: color, textTransform: styleText}}>
         lorem ipsum dolor sit amet, consectetur adip euismod tempor incididunt ut labore et dolore magna aliqu fugiat nulla pariatur et accus. 
      </p>
      </>
   )
}

Card.defaultProps = {
   color: "crimson",
   styleText: "uppercase"
}

export default Card
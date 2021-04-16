import React from 'react'

const Card = ({front, back}) => {

  const imgUrl = "url(https://unsplash.it/300/300/)"

  const divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
};

  return (
    <div className="col" onTouchStart="this.classList.toggle('hover');">
      <div className="container">
        <div className="front" style={divStyle}>
          <div className="inner">
            <p>{front}</p>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{back}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card



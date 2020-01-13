import React from 'react';



const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide} >
      Right
    </div>
  );
}

export default RightArrow;
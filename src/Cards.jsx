import React from "react";

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="profile" className="card_img" />
          <div className="card-info">
            <h3 className="name">{props.name}</h3>
            <p className="life">{props.life}</p>
            <a href={props.des} target="_blank">
              <button>View More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

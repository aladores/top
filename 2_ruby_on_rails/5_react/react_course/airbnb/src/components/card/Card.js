
import './Card.css';

function Card(props) {
  let badgeText = "";
  if (props.openSpots === 0) {
    badgeText = "SOLDOUT";
  }
  else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className='purchase-card' >
      {badgeText !== "" && < div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className='purchase-image' alt="camel"></img>

      <div className='review-row'>
        <p >★ {props.rating} <span style={{ color: "grey" }}>({props.reviewCount})-{props.location}</span></p>
      </div>
      <p>{props.title}</p>
      <p><span style={{ fontWeight: "bold" }}>From ${props.price}</span>/person</p>
    </div >
  )
}
export default Card;


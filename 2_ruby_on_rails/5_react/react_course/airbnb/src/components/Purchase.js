
import Card from './card/Card.js';
import purchaseData from '../data.js';
import './Purchase.css';
console.log(purchaseData);
function Purchase() {
  const cards = purchaseData.map(item => {
    return (
      <div key={item.id}>
        <Card {...item} />
      </div>
    );
  })
  return (
    <section className="purchase-container">
      <div className='purchase-row'>
        {cards}
      </div>
    </section >
  );
}

export default Purchase;

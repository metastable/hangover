import React from 'react';
interface OfferingsProps {
  gridItems?: {
    image?: string;
    link?: string;
    text?: string;
  }[];
}
const Offerings: React.FunctionComponent<OfferingsProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6" style={{ borderRadius: '5px' }}>
        <section className="section">
          <a href={item.link}>
            <p className="has-text-centered">
              <img alt="" src={item.image} />
            </p>
          </a>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);
export default Offerings;

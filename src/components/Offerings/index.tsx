import React from "react";
type OfferingsProps = {
  gridItems?: {
    image?: string,
    text?: string
  }[]
};
const Offerings: React.SFC<OfferingsProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div
        key={item.image}
        className="column is-6"
        style={{ borderRadius: "5px" }}
      >
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);
export default Offerings;

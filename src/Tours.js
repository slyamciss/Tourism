import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <div>
      <section>
        <div className="title">
          <h2>Ours tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;

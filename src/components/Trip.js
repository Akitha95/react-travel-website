import React from "react";
import "../Style/Trip.css";
import TripData from "./TripData";

import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discver unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indunesia"
          text="Indonesia, officially the Republic of Indonesia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus officiis repudiandae, quaerat fugiat aspernatur eos expedita dolore quibusdam aliquid non?"
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malayia is a Southeast Asian country Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus officiis repudiandae, quaerat fugiat aspernatur eos expedita dolore quibusdam aliquid non?"
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Fracne, in Wesern Europe, encmpasses medival cities, adipisicing elit. Natus officiis repudiandae, quaerat fugiat aspernatur eos expedita dolore quibusdam aliquid non?"
        />
      </div>
    </div>
  );
}

export default Trip;

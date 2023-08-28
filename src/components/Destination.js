import React from "react";

import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

// import "../Style/Destination.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>

        <DestinationData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="One of the most iconic views in Luzon, Mt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia officiis in adipisci nostrum
          deserunt dolores dolor perspiciatis nihil harum, dicta eveniet
          distinctio voluptatem tempore ad dolore perferendis dolorem voluptas
          voluptates quae fugit doloribus error id! Laudantium ea, laborum totam
          ut, voluptatibus quos sapiente, rem repellat maiores impedit odio
          eaque esse iusto deserunt voluptatum a nihil id doloribus? Quasi,
          numquam. Dolores architecto porro quasi a officia tenetur fugiat
          aliquid. Nihil nesciunt veniam quo tempora corporis reiciendis
          tenetur, corrupti magnam labore earum assumenda, necessitatibus iure
          molestias facilis, mollitia minima adipisci quasi quod qui vel
          explicabo vero est quaerat odio? Quas, aut? Excepturi quasi voluptatum
          debitis est dolores reprehenderit asperiores tenetur.
        "
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Mt. Paguldul, Batangas"
          text="If you're looking for a hike that's little more challenging but still good for a beginner mountaineer, check ut Mt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officia officiis in adipisci nostrum
          deserunt dolores dolor perspiciatis nihil harum, dicta eveniet
          distinctio voluptatem tempore ad dolore perferendis dolorem voluptas
          voluptates quae fugit doloribus error id! Laudantium ea, laborum totam
          ut, voluptatibus quos sapiente, rem repellat maiores impedit odio
          eaque esse iusto deserunt voluptatum a nihil id doloribus? Quasi,
          numquam. Dolores architecto porro quasi a officia tenetur fugiat
          aliquid. Nihil nesciunt veniam quo tempora corporis reiciendis
          tenetur, corrupti magnam labore earum assumenda, necessitatibus iure
          molestias facilis, mollitia minima adipisci quasi quod qui vel
          explicabo vero est quaerat odio? Quas, aut? Excepturi quasi voluptatum
          debitis est dolores reprehenderit asperiores tenetur.
        "
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
}

export default Destination;

import React from "react";
import MultiplePizzas from "../../assets/multiplePizzas.jpeg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
          aliquid possimus voluptatum dolore a ea velit, iste molestias harum,
          iusto maiores, veniam laudantium incidunt alias qui necessitatibus
          hic. Error voluptatem aspernatur culpa, esse rem assumenda illo
          commodi ad? Distinctio voluptatibus vel sint ea tempora dolorum est,
          nihil, quia quibusdam quidem dolorem iusto! Quis sed delectus dolor
          vel quo sapiente est asperiores ipsam adipisci odit labore dolorem
          autem possimus similique error, animi in facere. Ducimus expedita
          totam illo modi beatae pariatur consequatur, quasi repudiandae
          dignissimos explicabo omnis esse deleniti quis dolorum placeat dolore
          error perspiciatis. Esse modi ipsum molestias culpa.
        </p>
      </div>
    </div>
  );
};

export default About;

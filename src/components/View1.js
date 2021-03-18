import React from "react";
import { Link } from "react-router-dom";
const View1 = () => {
  return (
    <div className="view textBox">
      <h1>Kilka slow o nas</h1>
      <h2>Lorem ipsum dolor sit</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ex
        consequuntur esse expedita molestias? Nostrum et doloribus omnis esse
        doloremque! Veniam nesciunt laudantium corrupti. Beatae excepturi itaque
        eum ducimus, quibusdam eveniet, numquam ratione ab asperiores quasi
        tenetur quod! Voluptatem aut minima illo numquam magnam, eaque cum atque
        cumque, libero veniam consectetur beatae ea facilis? Sit unde vel dolor
        vitae molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
        excepturi sequi. Officiis aliquam, nostrum dolorem culpa deserunt
        laborum. Dolorem minus qui tempore cum, suscipit fugit exercitationem
        magnam natus beatae nobis et sed quibusdam ea molestias libero nemo
        earum neque? Molestiae saepe laudantium atque unde dolores, earum quidem
        iusto nam nihil.
      </p>
      <Link to="/form" className="btn">
        Zobacz więcej
      </Link>
    </div>
  );
};

export default View1;

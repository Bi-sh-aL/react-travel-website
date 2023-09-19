import React from "react";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner-container">
      <div className="b-container text-light text-center d-flex flex-column">
        <h2>World Tour</h2>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat. Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
      <div className="container d-flex justify-content-center mt-3 number">
        <div className="text-light text-center">
            <h2>567</h2>
            <p>Pellentesque scelerisque mollis</p>
        </div>
        <div className="text-light text-center px-5">
            <h2>567</h2>
            <p>Pellentesque scelerisque mollis</p>
        </div>
        <div className="text-light text-center">
            <h2>567</h2>
            <p>Pellentesque scelerisque mollis</p>
        </div>  
      </div>
    </div>
  );
}

export default Banner;

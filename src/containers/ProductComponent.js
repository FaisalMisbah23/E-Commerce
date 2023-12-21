import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category , description } = product;
    const { rating: { count: ratingCount, rate: ratingRate } } = product;

  // Split the description into an array of words
  const words = description.split(' ');
 // Select the first 30 words and join them back into a string
 const limitedDescription = words.slice(0, 13).join(' ');


    return (
      <div className="m-3 row col-md-3" key={id}>
        {/* <Link to={`/product/${id}`}> */}
            {/* <a href={`/product/${id}`}> */}
          {/* <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div> */}

<div className="card" style={{width: "35rem" ,  shadow: "5px 5px 5px 0px rgba(0,0,0,0.5)", boxShadow:" 5px 5px 5px 0px rgba(0,0,0,0.5)" }}>
<p className="my-3 card-text"><strong>{category}</strong> <hr /></p>
<div style={{
      display: "flex",
    justifyContent: "flex-end",
    right: "0",
    position: "absolute",
    fontSize: "15px",
    }} >
    <span class=" badge rounded-pill bg-danger" style={{left: '90%',zindex: "1"}} >
    {ratingRate} <strong><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg></strong> ({ratingCount})
  </span></div>
<img src={image} className="card-img-top" style={{ width: "250px", height: "300px" }} alt={title} /> 
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> $ <strong>{price}</strong>  <hr /> </p>
    <p className="card-text">{limitedDescription}... </p>
    <a href={`/product/${id}`} className="btn btn-primary">See More </a>
  </div>
</div>




        {/* // </Link> */}
         {/* </a> */}
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
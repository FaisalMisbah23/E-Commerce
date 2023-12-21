import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAcions";
import ProductListing from "./Productlisting"

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
   
    // <div className="ui grid container">
    //   {Object.keys(product).length === 0 ? (
    //     <div>...Loading</div>
    //   ) : (
    //     <div className="ui placeholder segment">
    //       <div className="ui two column stackable center aligned grid">
    //         <div className="ui vertical divider">AND</div>
    //         <div className="middle aligned row">
    //           <div className="column lp">
    //             <img className="ui fluid image" src={image} />
    //           </div>
    //           <div className="column rp">
    //             <h1>{title}</h1>
    //             <h2>
    //               <a className="ui teal tag label">${price}</a>
    //             </h2>
    //             <h3 className="ui brown block header">{category}</h3>
    //             <p>{description}</p>
    //             <div className="ui vertical animated button" tabIndex="0">
    //               <div className="hidden content">
    //                 <i className="shop icon"></i>
    //               </div>
    //               <div className="visible content">Add to Cart</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <>
    <div style={{marginTop:"50px"}} >
<div className="card my-5 m-5" style={{maxWidth: "100%" ,textAlign:"left" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt={title} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{maxWidth: "100%"}}> <h1>{title}</h1>  </h5>
        <p className="card-text" style={{maxWidth: "100%" }} > <strong><h2>${price}</h2></strong></p>
        <hr />
        
        <p className="card-text" style={{maxWidth: "100%"}} > <h3>Category: {category}</h3></p>
        <p className="card-text" style={{maxWidth: "100%"}} > <h4>Discription:</h4></p>
        <p className="card-text" style={{maxWidth: "100%"}} > <h5>{description}</h5></p>
        <p className="card-text" style={{maxWidth: "100%"}} > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt accusantium reiciendis, aperiam, explicabo blanditiis voluptate corporis distinctio tempore nihil impedit provident vitae ipsa beatae sit temporibus autem suscipit ducimus, officiis in quisquam! Mollitia, eos! Numquam voluptatem adipisci ipsam asperiores doloremque, exercitationem, et incidunt voluptatum deserunt laudantium alias fuga natus esse quos odit mollitia? Nulla consectetur vel, eum ipsam voluptatibus necessitatibus quasi repellendus reprehenderit cumque ratione doloribus commodi optio aut voluptatem deleniti dolor iusto, fugit suscipit exercitationem quisquam dolore autem. Omnis culpa natus voluptatum nesciunt velit itaque error pariatur vel assumenda laudantium consectetur cumque, ratione libero aperiam ducimus eveniet. Odit maxime ab neque debitis rem, explicabo dolorum provident. Perferendis beatae sunt placeat, aliquid accusamus commodi officiis, temporibus incidunt corrupti cupiditate dicta, architecto a animi pariatur facilis nihil aliquam. Cupiditate, eos dolorem omnis suscipit architecto odit reprehenderit maiores corporis, ducimus ipsa quam harum esse sed? Facere perferendis qui incidunt repudiandae, dolores dolor.</p>
        <button className="btn btn-primary" type="submit" >Buy Now</button>
        
      </div>
    </div>
  </div>
</div></div>
<h2 style={{textAlign:"center"}}>Explore More</h2>
<ProductListing/>
</>


  );
};

export default ProductDetails;
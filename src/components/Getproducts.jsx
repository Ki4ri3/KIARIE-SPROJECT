import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {

  // Initialize hooks to help you manage the state of your application.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Declare the navigate hook
  const navigate = useNavigate()

  // Below we specify the image base url
    const img_url = "https://keyarie.alwaysdata.net/static/images/"
  

  // Create a function to help you fetch the products from your API.
  const fetchProducts = async() =>{
    try{
      // Update the loading hook
      setLoading(true)
      // Interact with your endpoint for fetching the products.
      const response = await axios.get("https://keyarie.alwaysdata.net/api/get_products")

      // Update the products hook with the response given from the API
      setProducts(response.data)

      // Set the loading hook back to default
      setLoading(false)

    }
    catch(error){
      // If an error occurs:
      // 1.Set the loading back to default
      setLoading(false)
      // 2.Update the error hook with a message
      setError(error.message)
    }
  }

  // We shall use the useEffect hook -> enables us to automatically re-render new features incse of any changes.
  useEffect(() => {
    fetchProducts();
  }, [])

  console.log("These are the products", products)

  const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};



  return (
    <div className="row">
  {products.map((product) => (
    <div className="col-md-3 mb-4">
      <div style={styles.card}>
        <img
          src={img_url + product.product_photo}
          alt=""
          style={styles.image}
        />

        <h4>{product.product_name}</h4>
        <p>{product.product_description}</p>

        <h5 style={{ color: "#667eea" }}>
          KSH {product.product_cost}
        </h5>

        <button
          className="btn-ui"
          onClick={() => navigate("/makepayment", { state: { product } })}
        >
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>
      )
}

export default Getproducts;

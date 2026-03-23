import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';


const Addproducts = () => {

  // Introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Declare additional hooks to manage the state of the app
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Create a function that will handle the submit action
  const handleSumit = async (e) =>{

    // Prevent the site from reloading
    e.preventDefault()

    // setLoading hook with a message
    setLoading(true);

    try{
      // Create a form data
      const formdata = new FormData()
      // Append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // Interact with axois module to help you use the method post
      const response = await axios.post("https://keyarie.alwaysdata.net/api/add_product",formdata);

      // Set the loading hook back to default
      setLoading(false)

      // update the success hook with a message
      setSuccess(response.data.message);

      // Clear the hooks (setting them back to default/empty)
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
    catch(error){
      // Set loading hook back to default
      setLoading(false);

      // Update the setError with a message
      setError(error.message) 

    }
  }
  
  const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};


  return (
    <div style={styles.container}>
  <div className="card-ui" style={{ maxWidth: "500px", width: "100%" }}>
    <h2 style={{ textAlign: "center" }}>Add Product</h2>

    {loading && <p>Uploading...</p>}
    {success && <p style={{ color: "green" }}>{success}</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

    <form onSubmit={handleSumit}>
      <input
        type="text"
        placeholder="Product Name"
        className="input-ui"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        className="input-ui"
        value={product_description}
        onChange={(e) => setProductDescription(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price (KSH)"
        className="input-ui"
        value={product_cost}
        onChange={(e) => setProductCost(e.target.value)}
        required
      />

      <input
        type="file"
        className="input-ui"
        onChange={(e) => setProductPhoto(e.target.files[0])}
        required
      />

      <button className="btn-ui">Add Product</button>
    </form>
  </div>
</div>
  )
}

export default Addproducts

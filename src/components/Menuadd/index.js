import { CameraAltOutlined } from "@material-ui/icons";
import React from "react";
import "./styled.css";
import { useNavigate } from 'react-router'

const Menuadd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="custom-page">
        <h1>CUSTOM PAGE</h1>
      </div>
      <div className="logo">
        <span>Insert Logo Img:</span>
        <button className="Upload">Upload Img</button>
        <div className="camera">
          <CameraAltOutlined />
        </div>
      </div>
      <div className="shop-name" >
        <span>Shop Name:</span>
        <input type='text' placeholder="Enter Your Shop Name"></input>
      </div>
      <div className="shop-name" >
        <span>Product Name:</span>
        <input type='text' placeholder="Enter Product Name"></input>
      </div>
      <div className="shop-name" >
        <span>Description:</span>
        <input type='text' placeholder="Enter Product Description"></input>
      </div>
      <div className="logo">
        <span>Insert Product Img:</span>
        <button className="Upload">Upload Img</button>
        <div className="camera">
          <CameraAltOutlined />
        </div>
      </div>
      <div className="shop-name" >
        <span>Products Price:</span>
        <input type='text' placeholder="Enter Product Price"></input>
      </div>
      <div className="Add">
        <span>Add More Items:</span>
        <button className="Add-but">Add Items</button>
        </div>
      <div className="Publish">
        <button className="publish-but" onClick={()=>navigate('/Publish')}>Publish Your Website</button>
      </div>
    </div>
  );
};

export default Menuadd;

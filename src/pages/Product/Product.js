import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductTitleContainer,
  ProductAddButton,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
  ProductBottom,
  ProductInfoTop,
  ProductInfoImg,
  ProductInfoBottom,
  ProductInfoItem,
  ProductInfoKey,
  ProductInfoValue,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
  ProductUpload,
  ProductUploadImg,
  ProductButton,
} from "./product-elements";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import { MenuItem, TextField } from "@material-ui/core";
import { Publish } from "@material-ui/icons";


const Product = () => {
  const [currency, setCurrency] = useState("");
  const [inStock, setStock] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeStock = (event) => {
    setStock(event.target.value);
  };
  return (
    <ProductContainer>
      <ProductTitleContainer>
        <h1>Product</h1>
        <Link to="/products/newproduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart
            data={productData}
            dataKey="Sales"
            grid
            title="Sales Performance"
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImg
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span style={{ fontWeight: 600 }}>Apple Airpods</span>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>Id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>$123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Active:</ProductInfoKey>
              <ProductInfoValue>YES</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In stock:</ProductInfoKey>
              <ProductInfoValue>No</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <TextField id="standard-basic" label="Apple Airpod" />
            <TextField
              id="standard-basic"
              select
              label="inStock"
              value={inStock}
              onChange={handleChangeStock}
              helperText="Please select inStock"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
            <TextField
              id="standard-basic"
              select
              label="Active"
              value={currency}
              onChange={handleChange}
              helperText="Please select status"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
          <ProductUploadImg
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file">
              <Publish/>
            </label>
            <input type="file" id="file" style={{display:'none'}}/>
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};

export default Product;

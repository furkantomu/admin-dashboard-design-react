import { MenuItem, TextField } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import React, { useState } from "react";
import {
  NewProductContainer,
  ProductButton,
  ProductUploadForm,
  ProductUploadImg,
} from "./newproduct-elements";

const NewProduct = () => {
  const [currency, setCurrency] = useState("");
  const [inStock, setStock] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeStock = (event) => {
    setStock(event.target.value);
  };
  return (
    <NewProductContainer>
      <ProductUploadForm>
      <ProductUploadImg
          src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <label htmlFor="file">
          <Publish />
        </label>
        <input type="file" id="file" style={{ display: "none" }} />
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
        <ProductButton>Update</ProductButton>
      </ProductUploadForm>
    </NewProductContainer>
  );
};

export default NewProduct;

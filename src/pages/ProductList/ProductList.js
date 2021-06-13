import React, { useCallback, useState } from "react";
import { ProductListContainer } from "./productlist-elements";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummydata";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = useCallback(
    (id) => {
      setData(data.filter((item) => item.id !== id));
    },
    [data]
  );

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <img
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: 10,
              }}
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 190,
      type: "number",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={`/products/product=${params.row.id}`}>
              <button
                style={{
                  border: "none",
                  borderRadius: 10,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  background: "#3bb077",
                  color: "white",
                  cursor: "pointer",
                  marginRight: 10,
                }}
              >
                Edit
              </button>
            </Link>
            <DeleteOutline
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <ProductListContainer>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </ProductListContainer>
  );
};

export default ProductList;

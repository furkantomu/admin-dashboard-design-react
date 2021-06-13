import styled from "styled-components";

export const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;
export const ProductTop = styled.div`
  display: flex;
`;
export const ProductTopLeft = styled.div`
  flex: 1;
`;
export const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductBottom = styled.div`
  padding: 20px;

  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
export const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const ProductInfoKey = styled.span``;
export const ProductInfoValue = styled.span`
  font-weight: 300;
`;
export const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
export const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
export const ProductUpload = styled.div`
  display: flex;
  align-items: flex-end;
`;

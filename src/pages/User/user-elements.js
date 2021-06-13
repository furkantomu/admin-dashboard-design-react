import styled from "styled-components";

export const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
  margin-top: 20px;
`;
export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
  }
`;
export const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
`;
export const UserEditContainer = styled.div`
  display: flex;
`;
export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
export const UserShowBottom = styled.div`
  margin-top: 20px;
`;
export const UserShowImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;

  span {
    margin-left: 10px;
  }
`;
export const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const UserUpdateLeft = styled.div``;
export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserUpdateLeftItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const UserUpdateUpload = styled.div`
  display: flex;
    align-items: center;
`;
export const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const UserUpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;

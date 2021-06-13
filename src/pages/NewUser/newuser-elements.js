import styled from 'styled-components';

export const NewUserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
export const NewUserForm = styled.form`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const FormInputItem =styled.div`
  width: 460px;
  margin: 5px;
`;
export const FormButton = styled.button`
  height: 40px;
  align-self: flex-end;
  padding: 5px 40px;
  border: none;
  background-color: #203040;
  color:white;
  border-radius: 5px;
  cursor: pointer;
`;
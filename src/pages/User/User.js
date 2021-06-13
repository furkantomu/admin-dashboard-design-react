import { InputAdornment, TextField } from "@material-ui/core";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  Person,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  UserContainer,
  UserTitleContainer,
  UserAddButton,
  UserShow,
  UserUpdate,
  UserEditContainer,
  UserShowTop,
  UserShowBottom,
  UserShowImg,
  UserShowTopTitle,
  UserShowInfo,
  UserUpdateForm,
  UserUpdateLeft,
  UserUpdateRight,
  UserUpdateLeftItem,
  UserUpdateUpload,
  UserUpdateImg,
  UserUpdateButton,
} from "./user-elements";


const User = (props) => {
  return (
    <UserContainer>
      <UserTitleContainer>
        <h1>Edit User</h1>
        <Link to={`/users/newuser`}>
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserEditContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <UserShowTopTitle>
              <span style={{ fontWeight: 600 }}>Anna Becker</span>
              <span style={{ fontWeight: 300 }}>Sofware Engineer</span>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <span style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>
              Account Details
            </span>
            <UserShowInfo>
              <PermIdentity />
              <span>annabeck99</span>
            </UserShowInfo>
            <UserShowInfo>
              <CalendarToday />
              <span>10.12.1999</span>
            </UserShowInfo>{" "}
            <span style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>
              Contact Details
            </span>
            <UserShowInfo>
              <PhoneAndroid />
              <span>+1 123 456 78</span>
            </UserShowInfo>{" "}
            <UserShowInfo>
              <MailOutline />
              <span>annabeck99@outlook.com</span>
            </UserShowInfo>{" "}
            <UserShowInfo>
              <LocationSearching />
              <span>New York / USA</span>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <span style={{ fontSize: 24, fontWeight: 600 }}>Edit</span>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateLeftItem>
                <TextField
                  style={{
                    width: 400,
                  }}
                  id="input-with-icon-textfield"
                  label="Usernaame"
                  placeholder="annabeck99"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentity />
                      </InputAdornment>
                    ),
                  }}
                />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <TextField
                  id="input-with-icon-textfield"
                  label="Full Name"
                  placeholder="Anna Becker"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Birthday"
                  placeholder="10.12.1999"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    ),
                  }}
                />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  placeholder="annabeck99@outlook.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline />
                      </InputAdornment>
                    ),
                  }}
                />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <TextField
                  id="input-with-icon-textfield"
                  label="Contact"
                  placeholder="+1 123 456 78"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroid />
                      </InputAdornment>
                    ),
                  }}
                />
              </UserUpdateLeftItem>
              <UserUpdateLeftItem>
                <TextField
                  id="input-with-icon-textfield"
                  label="Address"
                  placeholder="New York / USA"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationSearching />
                      </InputAdornment>
                    ),
                  }}
                />
              </UserUpdateLeftItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <label style={{ cursor: "pointer" }} htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserEditContainer>
    </UserContainer>
  );
};

export default User;

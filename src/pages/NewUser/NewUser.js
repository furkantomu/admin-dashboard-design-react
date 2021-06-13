import React from "react";
import {
  NewUserContainer,
  NewUserForm,
  FormInputItem,
  FormButton,
} from "./newuser-elements";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const NewUser = () => {
  const [value, setValue] = React.useState("female");
  const [active, setActive] = React.useState("Yes");



  const handleChangeGender = (event) => {
    setValue(event.target.value);
  };

  const handleChangeActive = (event) => {
    setActive(event.target.value);
  };
  return (
    <NewUserContainer>
      <h1>New User</h1>
      <NewUserForm>
        <FormInputItem>
          {" "}
          <TextField id="outlined-basic" variant="outlined" label="Username" />
        </FormInputItem>
        <FormInputItem>
          <TextField  variant="outlined" label="Full Name" />
        </FormInputItem>
        <FormInputItem>
          <TextField variant="outlined" label="Birhday" />
        </FormInputItem>
        <FormInputItem>
          <TextField variant="outlined" label="Email" />
        </FormInputItem>
        <FormInputItem>
          <TextField  variant="outlined" type="password" label="Password" />
        </FormInputItem>
        <FormInputItem>
          <TextField  variant="outlined" label="Phone" />
        </FormInputItem>
        <FormInputItem>
          <TextField  variant="outlined" label="Address" />
        </FormInputItem>
        <FormInputItem>
          <FormControl variant="outlined"  component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChangeGender}
              style={{display:'flex',flexDirection:'row'}}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </FormInputItem>
        <FormInputItem>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Active
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Active"
              value={active}
              onChange={handleChangeActive}
              style={{width:223}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </FormInputItem>
        <FormButton>Add new user</FormButton>
      </NewUserForm>
    </NewUserContainer>
  );
};

export default NewUser;

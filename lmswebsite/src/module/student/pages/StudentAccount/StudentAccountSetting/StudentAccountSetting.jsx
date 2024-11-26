import React, { useEffect, useState } from "react";
import {
  Form,
  FormField,
  Label,
  Input,
  IconInputContainer,
  Icon,
  Button,
} from "./StudentAccountSetting.style";
import { FaUser } from "react-icons/fa"; // Example icon, using FontAwesome for the user icon
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import{getUserByAuthId}from "../../../../../api/userApi"
import{getStudentByAuthId}from "../../../../../api/studentApi"
import { updateUserByAuthId } from "../../../../../api/userApi";

const StudentAccountSettings = () => {
  
  const [firstName, setFirstName] = useState("Student");
  const [userName, setUsername] = useState("student_k");
  const [email, setEmail] = useState("Student@gmail.com");
  const [phone, setPhone] = useState("7837292020");
  useEffect(() => {
    console.log("hello2"); 
    const apiCaller=async() => {
      const authId=JSON.parse(localStorage.getItem("sessionData")).userId;
      const DataStudent= await getStudentByAuthId(authId);
      console.log(DataStudent);
      setFirstName(DataStudent.student.user_id.name);
      setUsername(DataStudent.student.user_id.email);
      setEmail(DataStudent.student.user_id.email);
      setPhone(DataStudent.student.phone_number);
    }
    apiCaller();

  }, []);

  const handlePhoneChange = (e) => {
    // Ensure the input contains only numbers and the length doesn't exceed 10
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setPhone(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authId=JSON.parse(localStorage.getItem("sessionData")).userId;
    const responseUser = await updateUserByAuthId(authId,{name:firstName,phone_number:phone});
    alert("Profile updated successfully!");
    window.location.reload();
  }

  return (
    <Form>
      <h2>Account settings</h2>
      <FormField>
        <Label>First Name</Label>
        <IconInputContainer>
          <Icon>
            <FaUser />
          </Icon>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </IconInputContainer>
      </FormField>
      <FormField>
        <Label>UserName</Label>
        <IconInputContainer>
          <Icon>
            <FaUser />
          </Icon>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly
          />
        </IconInputContainer>
      </FormField>
      <FormField>
        <Label>Email</Label>
        <IconInputContainer>
          <Icon>
            <MdEmail />
          </Icon>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </IconInputContainer>
      </FormField>
      <FormField>
        <Label>Phone Number</Label>
        <IconInputContainer>
          <Icon>
            <FaPhone />
          </Icon>
          <Input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="10"
            pattern="\d{10}"
            placeholder="Enter 10-digit phone number"
          />
        </IconInputContainer>
      </FormField>
      <Button onClick={handleSubmit}>Save Changes</Button>
    </Form>
  );
};

export default StudentAccountSettings;

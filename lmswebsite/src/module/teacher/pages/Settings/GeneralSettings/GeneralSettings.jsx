import React, { useState, useEffect } from "react";
import {
  Form,
  FormField,
  Label,
  Input,
  Heading,
  FileInput,
  Select,
} from "./GeneralSettings.style";
import { getUserByAuthId } from "../../../../../api/userApi";
import { getTeacherByAuthId } from "../../../../../api/teacherApi";

const GeneralSettings = () => {
  const [fullName, setFullName] = useState("Student K");
  const [username, setUsername] = useState("student_k");
  const [email, setEmail] = useState("student.k@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [dob, setDob] = useState("26/10/2002");
  const [gender, setGender] = useState("Male");

  useEffect(() => {
    console.log("hello");
    const apiCaller = async () => {
      const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
      const DataTeacher = await getTeacherByAuthId(authId);
      console.log(DataTeacher);
      setFullName(DataTeacher.teacher.user_id.name);
      setUsername(DataTeacher.teacher.user_id.email);
      setEmail(DataTeacher.teacher.user_id.email);
      setPhone(DataTeacher.teacher.phone_number);
      const dateObject = new Date(DataTeacher.teacher.dateOfBirth);
      const formattedDate = dateObject.toISOString().split("T")[0];
      setDob(formattedDate);
    }
    apiCaller();

  }, []);

  return (
    <Form>
      <Heading>General Settings</Heading>

      <FormField>
        <Label>Full Name</Label>
        <Input
          type="text"
          value={fullName}
          readOnly // Make the input read-only
        />
      </FormField>

      <FormField>
        <Label>Username</Label>
        <Input
          type="text"
          value={username}
          readOnly // Make the input read-only
        />
      </FormField>

      <FormField>
        <Label>Email Address</Label>
        <Input
          type="email"
          value={email}
          readOnly // Make the input read-only
        />
      </FormField>

      <FormField>
        <Label>Phone Number</Label>
        <Input
          type="tel"
          value={phone}
          readOnly // Make the input read-only
        />
      </FormField>

      <FormField>
        <Label>Date of Birth</Label>
        <Input
          type="date"
          value={dob}
          readOnly // Make the input read-only
        />
      </FormField>
    </Form>
  );
};

export default GeneralSettings;

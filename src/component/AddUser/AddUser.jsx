import React, { useState } from "react";
import Button from "../Layout/Button";
import Form from "../Layout/Form";

const AddUser = ({ addstaffHandller, closeModal }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [officialemail, setOfficialemail] = useState("");
  const [gender, setGender] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addstaffHandller({
      id: Math.round(Math.random() * 100),
      name,
      department,
      phone,
      email,
      officialemail,
      gender,
    });
    setName("");
    setDepartment("");
    setPhone("");
    setEmail("");
    setOfficialemail("");
    setGender("");
    closeModal();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Controler>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Controler>
      <Form.Controler>
        <label htmlFor="department"> Department </label>
        <input
          type="text"
          id="department"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </Form.Controler>
      <Form.Controler>
        <label htmlFor="phone"> Phone </label>
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Controler>
      <Form.Controler>
        <label htmlFor="email"> Email </label>
        <input
          type="text"
          id="email"
          placeholder="Enter "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Controler>
      <Form.Controler>
        <label htmlFor="officialemail">Official Email </label>
        <input
          type="text"
          id="officialemail"
          placeholder="Enter "
          value={officialemail}
          onChange={(e) => setOfficialemail(e.target.value)}
        />
      </Form.Controler>
      <Form.Controler>
        <label htmlFor="gender"> Gender</label>
        <input
          type="text"
          id="gender"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </Form.Controler>
      <div style={{ marginTop: "20px" }}>
        <Button type="submit" style={{ marginRight: "20px" }}>
          Save
        </Button>
        <Button type="reset" ype="reset">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default AddUser;

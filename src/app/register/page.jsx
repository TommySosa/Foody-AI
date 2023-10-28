"use client"
import React, { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    repeatPassword: "",
    password: "",
    genre: "male",
    birthday: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <form
        className="bg-white shadow-md rounded p-4 sm:p-8 w-full max-w-md mt-16"
      >
        <h2 className="text-2xl text-center font-bold mb-8">Register</h2>
        <div className="mb-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>        
        <div className="mb-4">
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            name="repeat password"
            type="password"
            placeholder="Repeat Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Genre:</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full"
            
          >
            
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <Input
            name="birthday"
            type="text"
            placeholder="dd/mm/yyyy"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Button text="Register" />
        </div>

        <p className="text-xs text-gray-600 text-center mt-8">
          Do you have a account?
          
          <Link href="/login"  className="text-blue-500 hover:underline ml-1">Login</Link>
        </p>
      </form>
    </div>
  );
}

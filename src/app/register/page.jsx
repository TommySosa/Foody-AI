"use client"
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true); 

    if (data.password !== data.repeatPassword) {
      setError("Las contraseñas no coinciden");
      setIsLoading(false); 
    } else {
      const gender = data.gender;

      
      setTimeout(() => {
        console.log("Datos del formulario:", data);
        console.log("Género seleccionado:", gender);
        setIsLoading(false); 
      }, 2000);
    }
  });

  return (
    <div className="flex flex-col items-center h-screen">
      <form
        className="bg-white shadow-md rounded p-4 sm:p-8 w-full max-w-md mt-16"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-8">Register</h2>
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            placeholder="First Name"
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="password"
            {...register("repeatPassword", {
              required: "Repeat Password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            placeholder="Repeat Password"
          />
          {errors.repeatPassword && (
            <span className="text-red-500 text-xs">
              {errors.repeatPassword.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            type="text"
            {...register("birthday", {
              required: "Birthday is required",
            })}
            placeholder="Birthday (dd/mm/yyyy)"
          />
          {errors.birthday && (
            <span className="text-red-500 text-xs">
              {errors.birthday.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Select Gender:</label>
          <select
            className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-xs">
              {errors.gender.message}
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-purple-500">Enviando datos...</p>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <Button text="Register" type="submit" />
            </div>
            <p className="text-gray-500 mb-4 text-center">Or</p>
          </div>
        )}

        <p className="text-xs text-gray-600 text-center mt-8">
          If you already have an account, please
          <Link href="/login" className="text-blue-500 hover:underline ml-1">
            Login Here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Register;

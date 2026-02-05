import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Home/SocialLogin/SocialLogin";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { setUser, registerUser } = useAuth();
  const [registerShowPassword, setRegisterShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle register
  const handleRegister = (data) => {
    console.log("data", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        //profile update
        updateProfile(result.user, {
          displayName: data.name,
          photoURL: data.photo,
        })
          .then(() => {
            console.log("Profile updated");
            setUser((prev) => ({
              ...prev,
              displayName: data.name,
              photoURL: data.photo,
            }));
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleShowRegisterPassword = (event) => {
    event.preventDefault();
    setRegisterShowPassword(!registerShowPassword);
  };

  return (
    <div className="bg-amber-200 p-6 rounded-lg w-full md:w-3/5 lg:w-2/5 mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">Photo URL</label>
            <input
              {...register("photo", { required: true })}
              type="text"
              className="input input-bordered w-full"
              placeholder="Photo URL"
            />
          </div>

          {/* Role */}
          <div>
            <label className="label">Role</label>
            <select
              {...register("role", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select Role
              </option>
              <option value="borrower">Borrower</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,10}$/,
                    message:
                      "6-10 chars, uppercase, lowercase, number & special character required",
                  },
                })}
                type={registerShowPassword ? "text" : "password"}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              <button
                onClick={handleShowRegisterPassword}
                className="absolute right-4 top-3"
                type="button"
              >
                {registerShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm py-2">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Button */}
          <button className="btn btn-neutral w-full mt-2">Register</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center py-3">
        Already have an Account?
        <Link to="/login" className="text-blue-400 underline">
          Log Here
        </Link>
      </p>
    </div>
  );
};

export default Register;

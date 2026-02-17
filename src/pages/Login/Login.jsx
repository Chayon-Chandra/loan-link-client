

import { useState } from "react";
import SocialLogin from "../Home/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";



const Login = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const { signInUser, setUser } = useAuth();
  const { register, handleSubmit, formState:{errors} } =  useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {

      const result = await signInUser(data.email, data.password);
      setUser(result.user);
      const token = await result.user.getIdToken();
      const res = await fetch(`https://loan-link-api.vercel.app/users/role/${data.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const roleData = await res.json();
      const role = roleData.role;

      localStorage.setItem("userRole", role);

      if (role === "admin") {
        navigate("/dashboard/admin");
      } else if (role === "manager") {
        navigate("/dashboard/manager");
      } else {
        navigate("/dashboard/my-loan"); 
      }
    } catch (error) {
      console.log("Login Error:", error.message);
    }
  };

  const handleShowLoginPassword = (event) => {
    event.preventDefault();
    setShowLoginPassword(!showLoginPassword);
  };

  return (
    <div className="bg-amber-200 p-6 rounded-lg w-full md:w-3/5 lg:w-2/5 mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
        Sign in your Account
      </h2>

      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm py-2">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showLoginPassword ? "text" : "password"}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              <button
                onClick={handleShowLoginPassword}
                className="absolute right-4 top-3"
              >
                {showLoginPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {errors?.password && (
              <p className="text-red-500 text-sm py-2">{errors.password.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button className="btn btn-neutral w-full mt-2">Login</button>
        </fieldset>
      </form>

      {/* Social login */}
      <SocialLogin />

      {/* Register link */}
      <p className="text-center py-3">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-400 underline">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;

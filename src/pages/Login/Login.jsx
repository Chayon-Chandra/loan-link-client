import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Home/SocialLogin/SocialLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const { signInUser, setUser } = useAuth();
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(async (result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state || "/");

        const token = await result.user.getIdToken();
        const res = await fetch(`http://localhost:3000/users/role/${data.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const roleData = await res.json();
      const role = roleData.role;
      localStorage.setItem("userRole", role);

      
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "manager") {
        navigate("/manager-dashboard");
      } else {
        navigate("/"); 
      }

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // show login password
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
              {...register("email")}
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>
          {errors.email && (
              <p className="text-red-500 text-sm py-2">
                {errors.email.message}
              </p>
            )}

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                {...register("password")}
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
          </div>
          {errors.password && (
              <p className="text-red-500 text-sm py-2">
                {errors.password.message}
              </p>
            )}
          {/* Button */}
          <button className="btn btn-neutral w-full mt-2">Login</button>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center py-3">
        Don't have an account?
        <Link to="/register" className="text-blue-400 underline">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;

import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptors = instance.interceptors.request.use((config) => {
      const token = user?.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptors = instance.interceptors.response.use(
      (res) => res,
      (err) => {
        const status = err.response?.status; // Fix here
        if (status === 401 || status === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(err); // Fix to propagate error
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptors);
      instance.interceptors.response.eject(responseInterceptors);
    };
  }, [user, logOut, navigate]);

  return instance;
};

export default useAxiosSecure;

import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://memotag-6thh.onrender.com/api";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/users/login`, {
        email,
        password,
      });
      const userData = res.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    } catch (err) {
      console.error("Login failed", err);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/users/register`, {
        email,
        password,
      });
      const userData = res.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    } catch (err) {
      console.error("Signup failed", err);
      return {
        success: false,
        message: err.response?.data?.message || "Signup failed",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, isLoggedIn: !!user, login, signup, logout, loading };
}

// Form submission
export const submitForm = (data) => axios.post(`${BASE_URL}/submitForm`, data);

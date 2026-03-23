import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();
      formdata.append("firstname", firstname);
      formdata.append("lastname", lastname);
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("tel", tel);

      const response = await axios.post(
        "https://keyarie.alwaysdata.net/api/signup",
        formdata
      );

      setSuccess(response.data.message || "Account created successfully!");

      setFirstname("");
      setLastname("");
      setUsername("");
      setEmail("");
      setPassword("");
      setTel("");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full border rounded-xl py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition";

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create Your Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          Join Our platFARM and Harvest Big! 🚀
        </p>

        {loading && (
          <p className="text-center text-indigo-600 mb-3 animate-pulse">
            Processing...
          </p>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm text-center">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm text-center">
            {error}
          </div>
        )}

        <div className='col-md-6 shadow p-4 row justify-content-center mt-4 '>
                  <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={inputStyle}
                required
              />
            </div>
            <br />

            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className={inputStyle}
                required
              />
            </div> <br />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
              required
            />
          </div> <br />

          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              requirednpm install lucide-react framer-motion
            />
          </div> <br />

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              required
            />
          </div> <br />

          <div className="relative">
            <Phone className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className={inputStyle}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Sign Up"}
          </motion.button>
        </form>
        </div>



        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

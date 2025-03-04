import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { BsCircleHalf } from "react-icons/bs";  // Import a loading spinner icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Track loading state
  const navigate = useNavigate();
  const { user, role } = useAuth();  // Fetch the user and role from context

  useEffect(() => {
    if (user && role === "member") {
      // If the user is logged in, redirect them to the training videos page
      navigate("/training-videos");
    }
  }, [user, role, navigate]);  // Only rerun if `user` or `role` changes

  const handleLogin = async () => {
    setIsLoading(true);  // Start loading spinner
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // No need to navigate explicitly here since useEffect will handle it
    } catch (error) {
      setError("Invalid email or password.");
      console.error("Login error:", error.message);
    } finally {
      setIsLoading(false);  // Stop loading spinner after authentication is complete
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <p className="text-gray-600 text-center mb-4">
          You must be a member to access the training videos.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        
        {/* Show loading spinner if authentication is in progress */}
        <button
          onClick={handleLogin}
          disabled={isLoading}  // Disable the button while loading
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex justify-center items-center"
        >
          {isLoading ? (
            <BsCircleHalf className="animate-spin text-white" size={24} />  // Display spinner icon
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;

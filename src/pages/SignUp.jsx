import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import setDoc

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const checkIfEmailExists = async (email) => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      return methods.length > 0; // Returns true if the email is already registered
    } catch (error) {
      console.error("Error checking email:", error.message);
      return false; // If an error occurs, assume email doesn't exist
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Check if email already exists
    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      setError("This email is already registered. Please try logging in.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: email,
        role: "member",
      });
      alert("Sign-up successful!");
      setError(null); // Clear error on successful signup

      // Scroll to top of homepage after successful sign-up
      window.scrollTo(0, 0); // This will scroll the page to the top

      // Redirect to Home page after successful sign-up
      navigate("/"); // Adjust this path according to your app's route
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please try logging in.");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null); // Clear error when email is changed
          }}
          placeholder="Email"
          value={email}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null); // Clear error when password is changed
          }}
          placeholder="Password"
          value={password}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError(null); // Clear error when confirm password is changed
          }}
          placeholder="Confirm Password"
          value={confirmPassword}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

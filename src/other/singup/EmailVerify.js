import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const EmailVerify = () => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        // Simulating asynchronous email verification

        setShowSuccessMessage(true);

        // Redirect to the login page after a delay (e.g., 3 seconds)
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        console.error("Error verifying email:", error);
      }
    };
    verifyEmailUrl();
  }, [navigate]);

  return (
    <div className="blurred-background">
      <div className="row">
        <div className="col-md-6">
          {showSuccessMessage && (
            <div className="success-message">
              <h1>Email Verified!</h1>
              <p>Redirecting to login...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;

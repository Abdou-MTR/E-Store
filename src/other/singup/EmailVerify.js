import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const EmailVerify = () => {
  const history = useHistory();
  const [validUrl, setValidUrl] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5000/api/users/${params.id}/verify/${params.token}`;
        const { data } = await axios.get(url);
        setValidUrl(true);
        setShowSuccessMessage(true);

        // Redirect to the login page after a delay (e.g., 3 seconds)
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params, history]);

  return (
    <div
      className={`container ${showSuccessMessage ? "blurred-background" : ""}`}
    >
      <div className="row">
        <div className="col-md-6">
          <Toaster />
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

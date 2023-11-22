import { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

const EmailVerify = () => {
  //const navigate = useNavigate();

  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5000/api/users/${params.id}/verify/${params.token}`;
        const { data } = await axios.get(url);


        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);
  return (
    <Fragment>
      {validUrl ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Email Verified</h1>
              <Link to="/login">
                {" "}
                <button class="add-btn-logout"> Login</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Invalid Url</h1>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EmailVerify;

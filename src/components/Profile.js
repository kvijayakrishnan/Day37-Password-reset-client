import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/Background.png'

const Profile = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  useEffect(() => {
    const user = JSON.stringify(localStorage.getItem("userName"));
    const userMail = JSON.stringify(localStorage.getItem("userEmail"));
    if (user && userMail) {
      setUserName(user);
      setUserEmail(userMail);
    }
  }, []);
  const HandleSumbit = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("react_token");
    localStorage.removeItem("token");

    toast.success("Successfully Logged Out");
    navigate("/");
  };
  return (
    <div
    style={{backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover'
        }}
    >
      <Toaster />
      <div className="profile-container">
        <div 
        
        className="col-lg-8 col-md-10 col-sm-12 my-5">
          <div className="card mt-3 shadow  col-10 my-5">
            <div className="card-header">
              <h2 className="card-title text-center">Profile Card</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center  p-3">
                UserName : <b>{userName}</b>
              </h5>
              <h5 className="card-title text-center  p-3">
                Email : <b>{userEmail}</b>
              </h5>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-warning col-10 fw-bold"
                onClick={HandleSumbit}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
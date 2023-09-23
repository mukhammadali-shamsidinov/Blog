import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "../App";
import {Link} from 'react-router-dom'
function Header() {
const {isAuth,isUser,userData}  = useContext(Context)
console.log(userData);
  return (
    <div className="bg-warning text-light">
      <div className="row g-2">
        <div className="col-12 col-md-8 mt-3">
          <div className="header_title">
            <h1>Blog Project</h1>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-3">
        <div className="header_button float-end p-2">
          {
            isUser ? <div className="d-flex align-items-center">
              <p>Hi {userData.displayName}</p>&nbsp;
              <p>
              <Link to={'/add'} className="btn btn-primary">Add Post</Link>
              </p>
              
            </div>:

            <div className="rounded" onClick={isAuth}>
          <Button>
        Sing Up
      </Button>
          </div>
          }
          
    
     </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

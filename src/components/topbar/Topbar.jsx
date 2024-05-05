import React from "react";
import "./topbar.css";
import { Settings } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";

export default function Topbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {isAuthenticated ? (
              <button className="lbutton" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            ) : (
              <button
                className="lbutton"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-auto">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Rephaser by Revitalizers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
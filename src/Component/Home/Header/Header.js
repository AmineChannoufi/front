import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Si vos comptes clients vous pèsent, Vendez-les ! </h2>
              <p>
                UNIFACTOR est un établissement financier d'affacturage, affilié
                au réseau international FCI et partenaire des principaux
                établissements bancaires tunisiens.
              </p>
              <form>
                <input type="email" placeholder="email" />
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

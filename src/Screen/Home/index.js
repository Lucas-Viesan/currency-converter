import "./index.css";
import { getApi } from "../../services/api";
import { useEffect } from "react";

export const HomeScreen = () => {
  const loadHomeScreen = () => {
    const result = getApi();
    console.log(result);
  };

  useEffect(() => {
    loadHomeScreen();
  }, []);
  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <div className="home-screen-navbar-container">
          <h2>Cotações</h2>
        </div>
        <div className="home-screen-currency-converter-container"></div>
        <div className="home-screen-graphic-container"></div>
      </div>
    </div>
  );
};

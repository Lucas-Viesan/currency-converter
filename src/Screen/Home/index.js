import "./index.css";
import { Input } from "../../components/Input";
import { Select } from "../../components/Input/Select";
import { getApi } from "../../services/api";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
  const [converter, setConverter] = useState(0);
  const [exchangeRates, setExchangeRates] = useState(null);
  const options = ["USD", "GBP", "JPY", "CHF", "CAD", "AUD"];
  const [selectedCurrency, setSelectedCurrency] = useState(""); // Novo estado para a moeda selecionada

  useEffect(() => {
    const loadHomeScreen = async () => {
      const result = await getApi();
      if (result && result.rates) {
        setExchangeRates(result.rates);
      }
    };

    loadHomeScreen();
  }, []);

  if (!exchangeRates) {
    return <div>Carregando...</div>;
  }

  const BRLRate = exchangeRates.BRL;

  const converterUSDToBRL = () => BRLRate / exchangeRates.USD;
  const converterGBPToBRL = () => BRLRate / exchangeRates.GBP;
  const converterJPYToBRL = () => BRLRate / exchangeRates.JPY;
  const converterCHFToBRL = () => BRLRate / exchangeRates.CHF;
  const converterCADToBRL = () => BRLRate / exchangeRates.CAD;
  const converterAUDToBRL = () => BRLRate / exchangeRates.AUD;

  const currencySelect = () => {
    switch (
      selectedCurrency // Usa selectedCurrency ao invés de options
    ) {
      case "USD":
        return converterUSDToBRL();
      case "GBP":
        return converterGBPToBRL();
      case "JPY":
        return converterJPYToBRL();
      case "CHF":
        return converterCHFToBRL();
      case "CAD":
        return converterCADToBRL();
      case "AUD":
        return converterAUDToBRL();
      default:
        return 0;
    }
  };

  const valorConvertido = currencySelect() * converter;

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <div className="home-screen-navbar-container">
          <h2>Cotações</h2>
        </div>
        <div className="home-screen-currency-converter-container">
          <h3>{valorConvertido.toFixed(2)} Reais</h3>
          <h5 className="cotation-subtitle">
            1 Euro hoje 31 de outubro as 17:00
          </h5>
          <h5 className="cotation-subtitle">Comercial</h5>
          <div className="selector-currency-converter">
            <div className="selector-currency-converter-content">
              <Select
                options={options}
                onChange={(value) => setSelectedCurrency(value)}
              />
              <Input
                onChange={(newValue) => setConverter(Number(newValue))}
                value={converter}
              />
            </div>
          </div>
        </div>
        <div className="home-screen-graphic-container">
          <h1>{valorConvertido.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

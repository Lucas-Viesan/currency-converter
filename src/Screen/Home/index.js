import "./index.css";
import { Input } from "../../components/Input";
import { Select } from "../../components/Input/Select";
import { getApi } from "../../services/api";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
  const [converter, setConverter] = useState(1);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [exchangeDate, setExchangeDate] = useState(null);
  const options = [
    "EUR - Euro",
    "USD - Dolar americano",
    "GBP - Libra esterlina",
    "JPY - Iene",
    "CHF - Franco suiço",
    "CAD - Dolar canadense",
    "AUD - Dolar australiano",
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(""); // Novo estado para a moeda selecionada

  useEffect(() => {
    const loadHomeScreen = async () => {
      const result = await getApi();
      if (result && result.rates) {
        setExchangeRates(result.rates);
        setExchangeDate(result.date);
      }
    };

    loadHomeScreen();
  }, []);

  if (!exchangeRates) {
    return <div>Carregando...</div>;
  }

  const BRLRate = exchangeRates.BRL;

  const converterEURToBRL = () => BRLRate;
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
      case "EUR - Euro":
        return converterEURToBRL();
      case "USD - Dolar americano":
        return converterUSDToBRL();
      case "GBP - Libra esterlina":
        return converterGBPToBRL();
      case "JPY - Iene":
        return converterJPYToBRL();
      case "CHF - Franco suiço":
        return converterCHFToBRL();
      case "CAD - Dolar canadense":
        return converterCADToBRL();
      case "CAD - Dolar australiano":
        return converterAUDToBRL();
      default:
        return BRLRate;
    }
  };

  const unidade = Math.floor(currencySelect() * 100) / 100;

  const valorConvertido = unidade * converter;

  const data = new Date(exchangeDate);

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <div className="home-screen-navbar-container">
          <h2>Cotações</h2>
          <div className="navbar-images-content ">
            <img
              className="navbar-images"
              src="/images/uniao-europeia.png"
              alt="uniao europeia"
            ></img>
            <img
              className="navbar-images"
              src="/images/estados-unidos.png"
              alt="estados unidos"
            ></img>
            <img
              className="navbar-images"
              src="/images/reino-unido.png"
              alt="reino unido"
            ></img>
            <img
              className="navbar-images"
              src="/images/japao.png"
              alt="japao"
            ></img>
            <img
              className="navbar-images"
              src="/images/suica.png"
              alt="suica"
            ></img>
            <img
              className="navbar-images"
              src="/images/australia.png"
              alt="australia"
            ></img>
            <img
              className="navbar-images"
              src="/images/canada.png"
              alt="canada"
            ></img>
          </div>
        </div>
        <div className="home-screen-currency-converter-container">
          <div className="title-currency-convert-content">
            <img
              className="navbar-images"
              src="/images/brasil.png"
              alt="brasil"
            ></img>
            <h3>
              {" "}
              {unidade.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
          </div>
          <h5 className="cotation-subtitle">
            1 {selectedCurrency} hoje {data.toLocaleDateString()}
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
          <h1>
            {Number(valorConvertido.toFixed(2)).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
        </div>
      </div>
    </div>
  );
};

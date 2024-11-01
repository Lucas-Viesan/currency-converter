import "./index.css";
import { Input } from "../../components/Input";
import { getApi } from "../../services/api";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
  const [converter, setConverter] = useState(1.0);
  const [exchangeRates, setExchangeRates] = useState(null); // Estado para armazenar as taxas
  const [exchangeBase, setExchangeBase] = useState(null);

  useEffect(() => {
    const loadHomeScreen = async () => {
      const result = await getApi(); // Chama a função getApi e espera a resposta
      if (result && result.rates) {
        setExchangeRates(result.rates); // Armazena as taxas no estado
        setExchangeBase(result.base);
      }
    };

    loadHomeScreen(); // Chama a função
  }, []);

  // Se ainda não tiver taxas, pode mostrar uma mensagem de carregamento
  if (!exchangeRates) {
    return <div>Carregando...</div>;
  }

  const brlRate = exchangeRates.BRL; // Acesse a taxa de USD

  const valorConvertido = brlRate * converter;

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <div className="home-screen-navbar-container">
          <h2>Cotações</h2>
        </div>
        <div className="home-screen-currency-converter-container">
          <h3>{valorConvertido} Reais</h3>
          <h5 className="cotation-subtitle">
            1 Euro hoje 31 de outubro as 17:00
          </h5>
          <h5 className="cotation-subtitle">Comercial</h5>
          <div className="selector-currency-converter">
            <Input
              onChange={(text) => setConverter(text)}
              value={converter}
            ></Input>
            <Input></Input>
          </div>
        </div>
        <div className="home-screen-graphic-container">
          <h1>{valorConvertido}</h1>
        </div>
      </div>
    </div>
  );
};

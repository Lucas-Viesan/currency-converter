export const getApi = () => {
  // URL da API com a chave de acesso
  const accessKey = "38341cf4c9defa5bc835d08ee804a8c2"; // Substitua por sua chave
  const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}`;

  // Realizando a chamada da API
  fetch(url)
    .then((response) => {
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro na rede: " + response.status);
      }
      return response.json(); // Converte a resposta para JSON
    })
    .then((data) => {
      console.log(data); // Exibe todo o objeto retornado

      // Acessando e manipulando os dados da propriedade "rates"
      const rates = data.rates; // Acessa o objeto de taxas
      console.log("Taxas de Câmbio:", rates); // Exibe as taxas de câmbio

      // Exemplo: acessar a taxa de câmbio de GBP para USD
      const gbpToUsd = rates.USD; // Supondo que você queira a taxa de GBP para USD
      console.log(`Taxa de GBP para USD: ${gbpToUsd}`);

      // Você pode iterar sobre todas as taxas
      for (const [currency, rate] of Object.entries(rates)) {
        console.log(`1 GBP = ${rate} ${currency}`);
      }
    })
    .catch((error) => {
      console.error("Houve um problema com a chamada da API:", error);
    });
};

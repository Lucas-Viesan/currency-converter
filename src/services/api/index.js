export const getApi = async () => {
  const accessKey = "38341cf4c9defa5bc835d08ee804a8c2"; // Substitua por sua chave
  const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na rede: " + response.status);
    }
    const data = await response.json();
    return data; // Retorna os dados da API
  } catch (error) {
    console.error("Houve um problema com a chamada da API:", error);
    return null; // Retorna null em caso de erro
  }
};

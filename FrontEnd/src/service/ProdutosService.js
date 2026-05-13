export const criarProduto = async (produto) => {
  try {
    const response = await fetch(
      "http://localhost:8080/produtos/criarProduto",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      },
    );

    if (!response.ok) {
      throw new Error(`Erro ao criar produto: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export const mostrarProdutos = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/produtos/mostrarProduto",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export const buscarProdutoPorId = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/produtos/mostrarProduto/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar produto: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

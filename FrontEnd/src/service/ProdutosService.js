export const criarProduto = async (produto, imagem) => {
  try {
    const formData = new FormData();
    formData.append(
      "produto",
      new Blob([JSON.stringify(produto)], { type: "application/json" }),
    );
    if (imagem) {
      formData.append("imagem", imagem);
    }
    console.log(imagem);
    console.log(formData.get("imagem"));
    const response = await fetch(
      "http://localhost:8080/produtos/criarProduto",
      {
        method: "POST",
        body: formData,
      },
    );
    if (!response.ok) {
      throw new Error(`Erro ao criar produto: ${response.statusText}`);
    }
    return await response.json();
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

export const atualizarProduto = async (id, produto) => {
  try {
    const response = await fetch(
      `http://localhost:8080/produtos/atualizarProduto/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      },
    );

    if (!response.ok) {
      throw new Error(`Erro ao atualizar produto: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export const deletarProduto = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/produtos/deletarProduto/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Erro ao deletar produto: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

import { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarAoCarrinho(produto, quantidade) {
    setItens((anterior) => {
      const existente = anterior.find((i) => i.produto.id === produto.id);
      if (existente) {
        return anterior.map((i) =>
          i.produto.id === produto.id
            ? { ...i, quantidade: i.quantidade + quantidade }
            : i
        );
      }
      return [...anterior, { produto, quantidade }];
    });
  }

  function removerDoCarrinho(produtoId) {
    setItens((anterior) => anterior.filter((i) => i.produto.id !== produtoId));
  }

  function limparCarrinho() {
    setItens([]);
  }

  function calcularTotal() {
    return itens.reduce(
      (soma, item) => soma + item.produto.preco * item.quantidade,
      0
    );
  }
  
  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
        calcularTotal,
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
} 
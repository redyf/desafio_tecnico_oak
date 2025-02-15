"use client";
import { Produto } from "@/types/produto";
import { useState } from "react";

interface FormularioProdutoProps {
  onSubmit: (produto: Produto) => void;
  onCancel: () => void;
}

export function FormularioProduto({
  onSubmit,
  onCancel,
}: FormularioProdutoProps) {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    valor: 0,
    disponivel: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      ...produto,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Cadastrar Produto</h2>

      <div>
        <label htmlFor="nome" className="block mb-2">
          Nome do produto
        </label>
        <input
          type="text"
          id="nome"
          required
          className="w-full p-2 border rounded dark:bg-gray-800"
          value={produto.nome}
          onChange={(e) =>
            setProduto((prev) => ({ ...prev, nome: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="descricao" className="block mb-2">
          Descrição
        </label>
        <textarea
          id="descricao"
          required
          className="w-full p-2 border rounded dark:bg-gray-800"
          value={produto.descricao}
          onChange={(e) =>
            setProduto((prev) => ({ ...prev, descricao: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="valor" className="block mb-2">
          Valor
        </label>
        <input
          type="number"
          id="valor"
          required
          min="0"
          step="0.01"
          className="w-full p-2 border rounded dark:bg-gray-800"
          value={produto.valor}
          onChange={(e) =>
            setProduto((prev) => ({
              ...prev,
              valor: parseFloat(e.target.value),
            }))
          }
        />
      </div>

      <div>
        <label className="block mb-2">Disponível para venda</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="disponivel"
              checked={produto.disponivel}
              onChange={() =>
                setProduto((prev) => ({ ...prev, disponivel: true }))
              }
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="disponivel"
              checked={!produto.disponivel}
              onChange={() =>
                setProduto((prev) => ({ ...prev, disponivel: false }))
              }
            />
            Não
          </label>
        </div>
      </div>

      <div className="flex gap-4 justify-end mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

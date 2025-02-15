"use client";
import { Produto } from "@/types/produto";

interface ListagemProdutosProps {
  produtos: Produto[];
  onNovoProduto: () => void;
}

export function ListagemProdutos({
  produtos,
  onNovoProduto,
}: ListagemProdutosProps) {
  const produtosOrdenados = [...produtos].sort((a, b) => a.valor - b.valor);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <button
          onClick={onNovoProduto}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Novo Produto
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Valor</th>
              <th className="p-4 text-left">Disponível</th>
            </tr>
          </thead>
          <tbody>
            {produtosOrdenados.map((produto) => (
              <tr key={produto.id} className="border-b dark:border-gray-700">
                <td className="p-4">{produto.nome}</td>
                <td className="p-4">
                  {produto.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded ${
                      produto.disponivel
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {produto.disponivel ? "Sim" : "Não"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

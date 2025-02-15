"use client";
import { FormularioProduto } from "@/components/FormularioProduto";
import { ListagemProdutos } from "@/components/ListagemProdutos";
import { Produto } from "@/types/produto";
import { useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSubmit = (produto: Produto) => {
    setProdutos((prev) => [...prev, produto]);
    setMostrarFormulario(false);
  };

  return (
    <div className="min-h-screen p-4">
      {mostrarFormulario ? (
        <FormularioProduto
          onSubmit={handleSubmit}
          onCancel={() => setMostrarFormulario(false)}
        />
      ) : (
        <ListagemProdutos
          produtos={produtos}
          onNovoProduto={() => setMostrarFormulario(true)}
        />
      )}
    </div>
  );
}

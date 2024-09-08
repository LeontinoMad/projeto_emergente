"use client";

import { useParams } from "next/navigation";
import React from "react";
import { GadoI } from "../../../utils/types/gados";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Detalhes() {
  const params = useParams();
  const [gado, setGado] = useState<GadoI>();

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/gados/${params.gado_id}`
      );
      const dados = await response.json();
      //console.log(dados);
      setGado(dados);
    }
    buscaDados();
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("./fundo.jpeg")' }}
    >
      <section className="flex mt-10 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
        
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-2/4 md:w-2/4 md:rounded-none md:rounded-s-lg"
          src={gado?.foto}
          alt="Foto Gado."
        />
        
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {gado?.tipo} {gado?.racas.nome}
          </h5>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 text-justify">
            {gado?.informacoes}
          </p>{" "}
          <h3 className="mb-3 font-normal text-gray-950 dark:text-gray-400">
            Preço: R${" "}
            {Number(gado?.preco).toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
      </section>
    </main>
  );
}

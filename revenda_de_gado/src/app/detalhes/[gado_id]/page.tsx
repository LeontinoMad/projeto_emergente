"use client";

import { useParams } from "next/navigation";
//import { FotoI } from "@/utils/types/fotos";
import React from "react";
import { GadoI } from "@/utils/types/gados";
import { useEffect, useState } from "react";
import { useClienteStore } from "@/context/cliente";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  descricao: string;
};

export default function Detalhes() {
  const params = useParams();
  const [gado, setGado] = useState<GadoI>();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  //const [fotos, setFotos] = useState<FotoI[]>([]);
  const { cliente } = useClienteStore();

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

    // async function buscaFotos() {
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_URL_API}/fotos/${params.carro_id}`
    //   );
    //   const dados = await response.json();
    //   setFotos(dados);
    // }
  }, []);

  async function enviaProposta(data: Inputs) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/propostas`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          clienteId: cliente.id,
          carroId: Number(params.gado_id),
          descricao: data.descricao,
        }),
      }
    );

    if (response.status == 201) {
      toast.success("Obrigado. Sua proposta foi enviada. Aguarde retorno");
      reset();
    } else {
      toast.error("Erro... Não foi possível enviar sua proposta");
    }
  }

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
          {cliente.id ? (
            <>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gostou deste Animal? Faça uma Proposta!
              </h3>
              <form onSubmit={handleSubmit(enviaProposta)}>
                <input
                  type="text"
                  className="mb-2 mt-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={`${cliente.nome} (${cliente.email})`}
                  disabled
                  readOnly
                />
                <textarea
                  id="message"
                  className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descreva a sua proposta"
                  required
                  {...register("descricao")}
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enviar Proposta
                </button>
              </form>
            </>
          ) : (
            <h3 className="text-xl font-bold tracking-tight text-orange-700 dark:text-white">
              <p>** Buenas!!</p>
              Faça login para fazer uma proposta para este animal.
            </h3>
          )}
        </div>
      </section>
    </main>
  );
}

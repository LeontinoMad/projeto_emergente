<<<<<<< HEAD
import { GadoI } from "../utils/types/gados";
import Link from "next/link";
import React from "react";

export function ItemGados({ data }: { data: GadoI }) {
  return (
    <div className="max-w-lg mx-auto p-4 ml-2 mr-2 bg-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/detalhes/${data.id}`}>
        <img
          className="w-full h-64 object-cover rounded-t-lg"
          src={data.foto}
          alt={`Imagem ${data.tipo}`}
        />
      </Link>
=======
import { GadoI } from "@/utils/types/gados";
// interface ItemGadosProps {
//   data: GadoI;
// }

export function ItemGados({ data }: { data: GadoI }) {
  return (
    <div className="max-w-md mx-auto p-4 ml-16 mr-16 bg-gray-400  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={data.foto}
        alt={`Imagem ${data.tipo}`}
      />
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.racas.nome} {data.tipo}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Idade: {data.idade}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Peso: {data.peso}
        </p>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          Valor: R${" "}
<<<<<<< HEAD
          {Number(data.preco).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 truncate ">
          Característica: {data.informacoes}
        </p>
        <Link
          href={`/detalhes/${data.id}`}
=======
          {data.preco.toLocaleString("bt-br", { minimumFractionDigits: 2 })}
        </p>

        <a
          href="#"
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver Detalhes
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
<<<<<<< HEAD
        </Link>
=======
        </a>
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
      </div>
    </div>
  );
}

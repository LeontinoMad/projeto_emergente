"use client";

<<<<<<< HEAD
import React from "react";
import { InputPesquisa } from "../components/InputPesquisa";
import { ItemGados } from "../components/ItemGados";
import { GadoI } from "../utils/types/gados";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
=======
import { InputPesquisa } from "@/components/InputPesquisa";
import { ItemGados } from "@/components/ItemGados";
import { GadoI } from "@/utils/types/gados";
import { useEffect, useState } from "react";
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147

export default function Home() {
  const [gados, setGados] = useState<GadoI[]>([]);
  useEffect(() => {
    async function buscaDados() {
<<<<<<< HEAD
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/gados`);
      const dados = await response.json();
      //console.log(dados);
=======
      const response = await fetch(`${process.env.NEST_PUBLIC_URL_API}/gados`);
      const dados = await response.json();
      console.log(dados);
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
      setGados(dados);
    }
    buscaDados();
  }, []);

  const listaGado = gados.map((gado) => (
    <ItemGados data={gado} key={gado.id} />
  ));
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("./fundo.jpeg")' }}
    >
<<<<<<< HEAD
      <InputPesquisa setGados={setGados} />
=======
      <InputPesquisa />
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147

      <section className="max-w-screen-xl mx-auto">
        <h1 className="mb-10 mt-6 text-center  text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Animais{"  "}
          <span className="underline underline-offset-3 decoration-8 decoration-gray-800 dark:decoration-gray-600">
            em destaque
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {listaGado}
        </div>
      </section>
<<<<<<< HEAD
      <Toaster position="top-right" richColors />
=======
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
    </main>
  );
}

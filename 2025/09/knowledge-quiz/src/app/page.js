"use client";

import QuestionManager from "@/components/QuestionManager";
import { useState } from "react";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [correct, setCorrect] = useState(0);

  return (
    <main className="bg-black text-white w-screen h-screen p-5">
      {!stage && (
        <>
          <h1 className="text-3xl">
            Seja bem vindo(a) ao Knowledge Quiz! Haverá 10 questões de tema
            gerais, você consegue acertar todas elas? Clique no botão abaixo e
            vamos descobrir se você é bem informado.
          </h1>
          <button
            type="button"
            className="bg-cyan-900 w-30 h-15 border-1 rounded-3xl mt-10"
            onClick={() => {
              setStage(stage + 1);
            }}
          >
            Iniciar
          </button>
        </>
      )}
      {stage && <QuestionManager stage={stage} setStage={setStage} />}
    </main>
  );
}

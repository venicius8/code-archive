"use client";

import { questions } from "@/app/questions";
import { useState, useEffect } from "react";

export default function QuestionManager({
  stage,
  setStage,
  correct,
  setCorrect,
}) {
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    const indexes = new Set();
    while (indexes.size < 10) {
      indexes.add(Math.floor(Math.random() * questions.length));
    }
    setRandomIndexes([...indexes]);
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[randomIndexes[stage - 1]];
    if (selectedOption === currentQuestion.correctOption) {
      setCorrect((prev) => prev + 1);
    }
    setStage(stage + 1);
  };

  if (stage > 10) {
    return (
      <div className="flex flex-col items-center p-5">
        <h1 className="text-4xl mb-6">Quiz Finalizado!</h1>
        <p className="text-2xl mb-4">Pontuação: {correct}/10</p>
        <button
          className="bg-cyan-900 text-white px-6 py-3 rounded-lg hover:bg-cyan-700"
          onClick={() => {
            setStage(0);
            setCorrect(0);
          }}
        >
          Reiniciar
        </button>
      </div>
    );
  }

  if (!randomIndexes.length || !questions[randomIndexes[stage - 1]]) {
    return <div className="text-center text-xl">Carregando...</div>;
  }

  const currentQuestion = questions[randomIndexes[stage - 1]];

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-4xl mb-6 text-center">{currentQuestion.title}</h1>
      <div className="grid gap-4 w-full max-w-md">
        {Object.entries(currentQuestion.options).map(([key, value]) => (
          <button
            key={key}
            className="bg-cyan-900 text-white p-3 rounded-lg hover:bg-cyan-700 text-left"
            onClick={() => handleAnswer(key)}
          >
            {`${key.toUpperCase()}. ${value}`}
          </button>
        ))}
      </div>
    </div>
  );
}

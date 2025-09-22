import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const randomNumber = async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(`
          ${Math.floor(Math.random() * 9000) + 1000}-${
          Math.floor(Math.random() * 9000) + 1000
        }`);
      }, 3000);
    });

  return (
    <section className="w-screen h-screen bg-indigo-100 flex justify-center items-center flex-col gap-10">
      <h1 className="text-4xl text-center">
        Aqui estão alguns contatos (fictícios) para você opinar sobre o projeto
        ou dar um feedback:
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="text-4xl text-center">
          <p>11 {randomNumber()}</p>
          <p>11 {randomNumber()}</p>
          <p>11 {randomNumber()}</p>
        </div>
      </Suspense>
    </section>
  );
}

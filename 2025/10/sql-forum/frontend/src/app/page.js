"use server";

import MainPostContainer from "@/components/MainPostsContainer";

export default async function Home() {
  const response = await fetch(`${process.env.URL}/mostliked`);
  const data = await response.json();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl text-center mb-12">Bem vindo ao Forum SQL</h1>

      <MainPostContainer
        textContent={"Os posts mais curtidos"}
        contents={data}
      />
      <MainPostContainer textContent={"Veja alguns dos posts recentes"} />
    </main>
  );
}

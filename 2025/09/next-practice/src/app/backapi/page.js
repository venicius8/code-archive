export default async function Backapi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  // function showDetails(id) {}

  return (
    <section className="flex flex-row justify-center gap-10">
      <div className="flex flex-col gap-6 md:items-start px-6">
        {data.map((e) => (
          <div
            key={e.id}
            className={`w-100 h-50 ${
              e.completed ? "bg-green-300" : "bg-zinc-500"
            }`}
            /*onClick={() => showDetails(e.id)}*/
          >
            <h1 className="text-2xl mb-6">{e.title}</h1>
          </div>
        ))}
      </div>
      <aside className="md:flex hidden bg-gray-300 w-1/2 h-screen">
        <h1>Detalhes</h1>
        <h2>oi</h2>
      </aside>
    </section>
  );
}

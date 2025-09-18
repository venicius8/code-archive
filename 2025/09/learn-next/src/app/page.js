export default async function Home() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return (
    <div>
      <h1 className="text-4xl mb-5">Página inicial</h1>
      <h2 className="text-2xl">
        Saudações! Aqui você encontrará conteúdos relevantes sobre
        desenvolvimento web com Next.js, especialmente se o seu nível de
        conhecimento for básico!
      </h2>

      <div>
        {data.posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl mt-3">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

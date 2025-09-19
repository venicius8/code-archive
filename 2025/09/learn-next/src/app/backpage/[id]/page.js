export default async function Detail({ params }) {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const { title, body } = await response.json();

  return (
    <div>
      <h1 className="text-4xl mb-5">{title}</h1>
      <p>{body}</p>
    </div>
  );
}

import Link from "next/link";

export default async function BackPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.id}>
          <Link href={`/backpage/${post.id}`}>
            <h2 className="text-2xl mt-3">{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function Backapi() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = response.json();

  return (
    <div>
      <p></p>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl">Página não encontrada (404)</h1>
      <Link href={"/"}>Ir para a página inicial</Link>
    </div>
  );
}

export default function name() {
  return (
    <section>
      <div className="w-screen flex justify-center items-center flex-col gap-6">
        <h2 className="text-3xl">Carregando...</h2>
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"></div>
      </div>
    </section>
  );
}

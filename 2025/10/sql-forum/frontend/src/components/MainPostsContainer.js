"use client";

export default function MainPostContainer({ textContent, contents }) {
  return (
    <div className="bg-blue-200 w-10/12 text-black min-h-100 rounded-2xl p-3 mt-5 mb-5 max-w-200">
      <h2 className="text-3xl text-center">{textContent}</h2>
      {Array.isArray(contents) ? (
        contents.map((content) => (
          <div key={content.id} className="mt-6 bg-gray-200 p-4 rounded-2xl">
            <h3 className="text-2xl font-bold">{content.author}</h3>
            <p className="mb-5">{content.content}</p>
            <div className="w-2/3 h-[1px] bg-gray-400 mt-10"></div>
            <span>{content.like} curtidas</span>
          </div>
        ))
      ) : (
        <p className="mt-6 text-center">Nenhum post disponível</p>
      )}
    </div>
  );
}

"use client";

export default function MainPostContainer({ textContent, contents }) {
  return (
    <div className="bg-blue-200 w-10/12 text-black min-h-100 rounded-2xl p-3 mt-5 mb-5 max-w-200">
      <h2 className="text-3xl text-center">{textContent}</h2>
      {Array.isArray(contents) ? (
        contents.map((content) => (
          <div key={content.id}>
            <h3>{content.user}</h3>
            <p>{content.content}</p>
            <span>Likes: {content.likes}</span>
          </div>
        ))
      ) : (
        <p>Nenhum post disponível</p>
      )}
    </div>
  );
}

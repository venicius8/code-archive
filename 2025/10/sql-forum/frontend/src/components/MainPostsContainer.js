"use client";

export default function MainPostContainer({ textContent, contents }) {
  contents = [contents];
  return (
    <div className="bg-blue-200 w-10/12 text-black min-h-100 rounded-2xl p-3 mt-5 mb-5 max-w-200">
      <h2 className="text-3xl text-center">{textContent}</h2>
    </div>
  );
}

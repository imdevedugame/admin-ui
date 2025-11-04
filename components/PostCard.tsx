import { useState } from "react";

type PostCardProps = {
  id: number;
  userId?: number;
  title: string;
  body: string;
};

export default function PostCard({ id, userId, title, body }: PostCardProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      className={`post-card border text-center rounded-lg p-2 bg-white flex flex-col justify-between shadow-sm transition-all duration-200 
        ${
          clicked
            ? "bg-amber-50 border-black-60"
            : "border-black/10 hover:border-black hover:shadow-md hover:-translate-y-1 hover:bg-pink-50" 
        }`}
      aria-labelledby={`post-title-${id}`}
    >
      <header>
        <h3
          id={`post-title-${id}`}
          className="text-lg font-semibold text-gray-900 leading-snug"
        >
          {title}
        </h3>
      </header>

      <main className="mt-3 text-sm text-gray-700 flex-1">
        <p className="line-clamp-5">{body}</p>
      </main>

      <footer className="mt-4 flex items-center justify-center">
        <button
          onClick={() => setClicked((s) => !s)}
          className={`w-full px-3 py-2 rounded text-sm font-medium text-white transition-colors duration-200 
            ${
              clicked
                ? "bg-[#b83016] hover:bg-[#fa411c]"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          aria-pressed={clicked}
          type="button"
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </footer>
    </article>
  );
}

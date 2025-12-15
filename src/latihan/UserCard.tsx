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
			className="post-card border border-transparent rounded-lg p-4 bg-white flex flex-col justify-between"
			aria-labelledby={`post-title-${id}`}
		>
			<header>
				<h3 id={`post-title-${id}`} className="text-lg font-semibold text-gray-800">
					{title}
				</h3>
			</header>

			<main className="mt-3 text-sm text-gray-700 flex-1">
				<p>{body}</p>
			</main>

			<footer className="mt-4 flex items-center justify-between">
				<div className="text-xs text-gray-500">User #{userId}</div>

				<button
					onClick={() => setClicked(true)}
					className={`post-button px-3 py-2 rounded text-sm text-white ${
						clicked ? "post-button--clicked" : "bg-gray-500"
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

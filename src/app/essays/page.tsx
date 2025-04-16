import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essays Saya',
  description: 'Halaman Essay saya.',
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

// app/essays/page.tsx
export default function Essays() {
  const articles = [
    { title: "Artikel 1", summary: "Ringkasan artikel 1." },
    { title: "Artikel 2", summary: "Ringkasan artikel 2." },
    { title: "Artikel 3", summary: "Ringkasan artikel 3." },
  ];

  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-800 mb-2">Esai</h1>
        <p className="text-zinc-600 mb-10">Berikut adalah daftar artikel yang telah saya tulis.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-zinc-200 transition duration-300"
            >
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">{article.title}</h2>
              <p className="text-sm text-zinc-600">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

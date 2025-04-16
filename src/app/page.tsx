import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4x1 text-zinc-800">Tentang Saya</h1>
      </header>
    </div>
  );
}

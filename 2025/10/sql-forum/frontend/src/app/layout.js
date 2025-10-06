import "./globals.css";

export const metadata = {
  title: "SQL Forum",
  description: "Fórum feito usando SQL & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-white m-6">{children}</body>
    </html>
  );
}

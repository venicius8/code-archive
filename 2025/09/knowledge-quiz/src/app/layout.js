import "./globals.css";

export const metadata = {
  title: "Knowledge Quiz",
  description: "Teste seu conhecimento sem minutos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

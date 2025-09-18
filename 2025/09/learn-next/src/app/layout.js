import "./globals.css";
import { Header } from "../components/header";

export const metadata = {
  title: "Learn Next.js",
  description: "Um playground para aprender Next.js de forma rápida.",
  rebots: {
    // Entender mais essa parte
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <br />
        {children}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Next Practice",
  description: "I practice, you practice, we practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header />
      <body>{children}</body>
    </html>
  );
}

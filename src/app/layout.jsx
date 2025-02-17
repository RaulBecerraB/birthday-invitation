import "./globals.css";
import NavBar from "../Components/NavBar";
export const metadata = {
  title: "Cumpleaños de Raúl",
  description: "Invitación para el cumpleaños de Raúl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background`}
      >
        <main className="min-h-screen flex flex-col items-center">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}

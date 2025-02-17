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
        <div className=" flex flex-col items-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

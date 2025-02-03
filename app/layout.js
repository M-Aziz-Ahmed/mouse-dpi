import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz-app",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[nunito.className, " flex justify-center"]}>
        <div className="w-screen min-h-screen ">{children}</div>
      </body>
    </html>
  );
}

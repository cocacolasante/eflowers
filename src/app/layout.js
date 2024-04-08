import Navbar from "../../components/Navbar/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      <body className={null}>
        <Navbar />
          {children}
      </body>
    </html>
  );
}

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import LayoutWrapper from "@/components/shared/layout-wrapper";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nayan Chandra Datta - Portfolio",
  description: "MERN Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <LayoutWrapper>{children}</LayoutWrapper>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto py-4 px-4 border-t flex justify-between items-center text-sm text-muted-foreground mt-auto">
      <div>© 2022 Nayan Chandra Datta</div>
      <div className="flex gap-4">
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link
          href="#top"
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

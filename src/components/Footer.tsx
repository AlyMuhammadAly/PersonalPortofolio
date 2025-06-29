import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative boarder-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ali R, All rights reserved
      </p>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/20 text-primary transition-colors"
      >
        {" "}
        <ArrowUp size={20} />{" "}
      </a>
    </footer>
  );
}

export default Footer;

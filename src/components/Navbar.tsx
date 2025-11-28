import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/metro-digitech-logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Metro Digitech Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
            Process
          </a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            View Portfolio
          </Button>
          <Button size="sm" className="glow-purple">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

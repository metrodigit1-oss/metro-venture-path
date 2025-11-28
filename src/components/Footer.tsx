import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/metro-digitech-logo.png";

const footerStations = [
  {
    title: "Services",
    links: [
      { name: "Seed Venture Capital", href: "/#services" },
      { name: "Project Management", href: "/#process" },
      { name: "Development", href: "/#process" },
      { name: "Portfolio", href: "/#portfolio" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#vision" },
      { name: "Team", href: "/#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/blog" }
    ]
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Metro Map Style Layout */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md: col-span-2">
             <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Metro Digitech Logo" 
            className="h-[75px] w-auto"
          />
        </Link>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              The fastest line from idea to exit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Station Links */}
          {footerStations.map((station) => (
            <div key={station.title}>
              <h4 className="font-display font-semibold mb-4">{station.title}</h4>
              <ul className="space-y-2">
                {station.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                       <a 
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                     >
                       <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                       {link.name}
                     </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Metro Digitech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/legal" className="hover:text-foreground transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
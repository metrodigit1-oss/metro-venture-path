import { Github, Linkedin, Twitter } from "lucide-react";

const footerStations = [
  {
    title: "Services",
    links: ["Seed Venture Capital", "Project Management", "Development", "Portfolio"]
  },
  {
    title: "Company",
    links: ["About", "Team", "Careers", "Blog"]
  },
  {
    title: "Resources",
    links: ["Case Studies", "Founder FAQ", "Investor Relations", "Contact"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Metro Map Style Layout */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
              Metro Digitech
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
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
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {link}
                    </a>
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
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

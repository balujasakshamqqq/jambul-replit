import { FlaskRound, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#production", label: "Production Blocks" },
    { href: "#quality", label: "Quality" },
    { href: "#news", label: "News" },
    { href: "#careers", label: "Careers" },
    { href: "#contact", label: "Contact Us" },
  ];

  const services = [
    "API Manufacturing",
    "Formulation",
    "Sterile Injectables",
    "Contract Manufacturing",
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FlaskRound className="text-white" size={20} />
              </div>
              <div>
                <div className="text-lg font-semibold">Jambul Enterprises</div>
                <div className="text-xs text-slate-400 -mt-1">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Creative Chemistry for a Better Tomorrow. State-of-the-art pharmaceutical 
              manufacturing with global quality standards.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service}>
                  <button className="hover:text-white transition-colors">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>info@jambul.com</p>
              <p>operations@jambul.com</p>
              <p>+91 (11) 2XXX-XXXX</p>
              <div className="flex space-x-4 mt-4">
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 Jambul Enterprises Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-slate-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Quality Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

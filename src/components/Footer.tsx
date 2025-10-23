import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Suhani's Bridal Studio
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your perfect bridal look awaits. We specialize in creating stunning bridal makeup and hairstyles that make your special day unforgettable.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:8849832511" className="text-sm hover:text-primary transition-smooth">
                  8849832511
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <address className="text-sm not-italic text-muted-foreground">
                  C/4172, AUM Villa Banglows,<br />
                  Behind KPES Collage, Near Takshshila school,<br />
                  Bhagwati circle, KALIYABID<br />
                  Bhavnagar - 364002
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/appointment" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Book Appointment
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Suhani's Bridal Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

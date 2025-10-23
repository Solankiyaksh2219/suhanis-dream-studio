import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bridal.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-bridal-dark/80 via-bridal-dark/60 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Your Dream Bridal Look Awaits
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Expert bridal makeup and styling services by Suhani Solanki
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/appointment">
                  <Button size="lg" className="shadow-elegant w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:8849832511">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Suhani's Bridal Studio</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With years of experience in bridal makeup and styling, we transform your wedding day dreams into reality. 
                Every bride deserves to look and feel absolutely stunning on her special day.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Brides</div>
                </Card>
                <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 shadow-soft hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">Premium</div>
                  <div className="text-sm text-muted-foreground">Quality Products</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive bridal beauty services tailored to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                "Bridal Makeup",
                "Hair Styling",
                "Pre-Bridal Services",
                "Engagement Makeup",
                "Party Makeup",
                "Saree Draping"
              ].map((service) => (
                <Card key={service} className="p-6 shadow-soft hover:shadow-elegant transition-smooth text-center">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-sm text-muted-foreground">Professional and elegant styling</p>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-elegant">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:8849832511" className="text-muted-foreground hover:text-primary transition-smooth">
                          8849832511
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Location</div>
                        <address className="text-muted-foreground not-italic text-sm">
                          C/4172, AUM Villa Banglows,<br />
                          Behind KPES Collage,<br />
                          Near Takshshila school,<br />
                          Bhagwati circle, KALIYABID<br />
                          Bhavnagar - 364002
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Ready to book?</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule your appointment today and let us make you look absolutely stunning.
                  </p>
                  <Link to="/appointment">
                    <Button size="lg" className="w-full shadow-elegant">
                      Book Your Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

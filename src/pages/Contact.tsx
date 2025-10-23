import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for appointments, inquiries, or any questions
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Details Card */}
              <Card className="p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <a 
                          href="tel:8849832511" 
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          8849832511
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Call us for immediate assistance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Studio Address</h3>
                        <address className="text-muted-foreground not-italic">
                          C/4172, AUM Villa Banglows,<br />
                          Behind KPES Collage,<br />
                          Near Takshshila school,<br />
                          Bhagwati circle, KALIYABID<br />
                          Bhavnagar - 364002
                        </address>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Working Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                          <p>Sunday: By Appointment Only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Suhani Solanki</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional Bridal Makeup Artist & Hair Stylist
                  </p>
                </div>
              </Card>

              {/* Quick Actions Card */}
              <Card className="p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                
                <div className="space-y-4">
                  <a href="tel:8849832511" className="block">
                    <Button size="lg" className="w-full shadow-soft">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  
                  <a 
                    href={`https://wa.me/918849832511?text=${encodeURIComponent("Hi, I would like to book an appointment at Suhani's Bridal Studio")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline" className="w-full">
                      <Mail className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-3">Visit Our Studio</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We welcome walk-ins, but appointments are preferred to ensure we can give you our full attention.
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("AUM Villa Banglows, Bhagwati circle, KALIYABID Bhavnagar 364002")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <p className="text-sm font-medium mb-3">Have questions about our services?</p>
                  <p className="text-sm text-muted-foreground">
                    Feel free to call or message us anytime. We're here to help make your special day perfect!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Crown, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Bridal Makeup",
      description: "Complete bridal makeup package with HD base, professional eye makeup, and long-lasting finish. Perfect for your special day.",
      features: ["HD Makeup", "Airbrush Option", "Long-lasting Formula", "Touch-up Kit"]
    },
    {
      icon: Sparkles,
      title: "Hair Styling",
      description: "Professional hair styling including braids, buns, curls, and contemporary styles to complement your bridal look.",
      features: ["Traditional Styles", "Modern Trends", "Hair Extensions", "Floral Decoration"]
    },
    {
      icon: Heart,
      title: "Pre-Bridal Services",
      description: "Complete pre-bridal packages including facials, clean-ups, and skin treatments for radiant wedding glow.",
      features: ["Facial Treatments", "Skin Glow", "Hair Spa", "Manicure & Pedicure"]
    },
    {
      icon: Star,
      title: "Engagement Makeup",
      description: "Elegant and sophisticated makeup for your engagement ceremony that photographs beautifully.",
      features: ["Elegant Look", "Photo-ready", "Long-lasting", "Trendy Styles"]
    },
    {
      icon: Sparkles,
      title: "Party Makeup",
      description: "Glamorous party makeup for receptions, sangeet, and other wedding functions.",
      features: ["Glamorous Looks", "Customizable", "Quick Service", "Touch-ups Included"]
    },
    {
      icon: Heart,
      title: "Saree Draping",
      description: "Professional saree draping in various traditional and contemporary styles.",
      features: ["Multiple Styles", "Quick Draping", "Secure Pleating", "Perfect Finish"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive bridal beauty services designed to make you look absolutely stunning
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 shadow-soft hover:shadow-elegant transition-smooth">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your appointment today and let us create your perfect bridal look
            </p>
            <Link to="/appointment">
              <Button size="lg" className="shadow-elegant">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

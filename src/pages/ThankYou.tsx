import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Home, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 shadow-elegant text-center">
              <Heart className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Thank You for Visiting!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We appreciate your interest in Suhani's Bridal Studio. It would be our honor to be part of your special day 
                and help you look absolutely stunning.
              </p>
              
              <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                <p className="text-muted-foreground mb-4">
                  Whether you're planning your wedding, engagement, or any special occasion, we're here to make you shine.
                </p>
                <p className="font-medium">
                  We look forward to hearing from you soon!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/appointment">
                  <Button size="lg" className="w-full sm:w-auto shadow-elegant">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-border/40">
                <p className="text-sm text-muted-foreground">
                  Follow us on social media for latest bridal trends and our work
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;

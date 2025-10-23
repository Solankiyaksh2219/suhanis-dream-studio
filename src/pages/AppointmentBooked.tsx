import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, User, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppointmentBooked = () => {
  const [appointmentData, setAppointmentData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("appointmentData");
    if (data) {
      setAppointmentData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 shadow-elegant text-center">
              <div className="mb-8">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Appointment Request Received!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Thank you for choosing Suhani's Bridal Studio. We'll contact you shortly to confirm your appointment.
                </p>
              </div>

              {appointmentData && (
                <div className="bg-secondary/30 rounded-lg p-6 mb-8 text-left">
                  <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Name</div>
                        <div className="font-medium">{appointmentData.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-medium">{appointmentData.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{appointmentData.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Time</div>
                        <div className="font-medium">{appointmentData.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-muted-foreground">Service</div>
                        <div className="font-medium">{appointmentData.service}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  A confirmation call will be made to your registered phone number within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Back to Home
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" className="w-full sm:w-auto">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentBooked;

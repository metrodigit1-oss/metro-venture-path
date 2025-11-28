import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_kslkri8"; // e.g. "service_kslkri8"
    const TEMPLATE_ID = "template_npfoxn9";
    const PUBLIC_KEY = "ThwCeegHkKtF1UrHV";

    try {
      if (form.current) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
        
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours."
        });
        
        form.current.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message.", {
        description: "Please try again later or email us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your journey? Contact our team to discuss your venture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 space-y-6 bg-secondary/5 border-primary/10">
                <h3 className="text-2xl font-display font-semibold">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:metrodigit1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        metrodigit1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+919446576362" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 94465 76362
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-muted-foreground">
                        Building No.: VIII/387/B, <br /> 
                        Keezhillam, Perumbavoor, <br />
                        Ernakulam, Kerala 683541
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-primary/10 shadow-lg">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_firstname" className="text-sm font-medium">First Name</label>
                    <Input id="user_firstname" name="user_firstname" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_lastname" className="text-sm font-medium">Last Name</label>
                    <Input id="user_lastname" name="user_lastname" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">Email</label>
                  <Input id="user_email" name="user_email" type="email" placeholder="jane@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell us about your project..." 
                    className="min-h-[150px]" 
                    required 
                  />
                </div>

                <Button type="submit" className="w-full glow-purple group" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
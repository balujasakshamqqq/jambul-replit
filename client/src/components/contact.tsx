import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building, Factory, Phone, Mail, Clock, MapPin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Delhi Headquarters",
      details: [
        "Jambul Enterprises Pvt. Ltd.",
        "New Delhi, India",
        "info@jambul.com",
      ],
    },
    {
      icon: Factory,
      title: "Rajasthan Manufacturing Plant",
      details: [
        "Ghiloth Industrial Area",
        "Ghiloth, Rajasthan, India",
        "operations@jambul.com",
      ],
    },
  ];

  const quickContact = [
    { icon: Phone, label: "+91 (11) 2XXX-XXXX" },
    { icon: Mail, label: "info@jambul.com" },
    { icon: Clock, label: "Mon-Fri: 9:00 AM - 6:00 PM IST" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-lg text-slate-600">Ready to explore partnership opportunities or have questions about our capabilities?</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <info.icon className="text-primary mr-3" size={24} />
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 mb-2">
                    {detail}
                  </p>
                ))}
              </div>
            ))}

            <div className="bg-primary p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                {quickContact.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <contact.icon className="mr-3" size={20} />
                    <span>{contact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="company" className="text-sm font-medium text-slate-700 mb-2">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Visit Our Manufacturing Facility</h3>
          <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-slate-600">
              <MapPin className="mx-auto mb-4" size={48} />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Ghiloth Industrial Area, Rajasthan, India</p>
              <p className="text-xs mt-2">Google Maps integration would be implemented here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Factory, IdCard, Globe, Handshake } from "lucide-react";

export default function Hero() {
  const highlights = [
    {
      icon: Factory,
      title: "3 Advanced Production Blocks",
      description: "Specialized manufacturing for APIs, formulations, and sterile injectables",
    },
    {
      icon: IdCard,
      title: "WHO-GMP Certified",
      description: "International quality standards compliance across all manufacturing processes",
    },
    {
      icon: Globe,
      title: "Global Regulatory Compliance",
      description: "Meeting international pharmaceutical regulations and export standards",
    },
    {
      icon: Handshake,
      title: "Flexible B2B Manufacturing",
      description: "Customized contract manufacturing solutions for pharmaceutical partners",
    },
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Creative Chemistry for a{" "}
              <span className="text-primary">Better Tomorrow</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              State-of-the-art pharmaceutical manufacturing in Rajasthan, India.
              Delivering innovation, quality, and regulatory excellence across global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('production')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Capabilities
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Download Company Profile
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern pharmaceutical manufacturing facility"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Jambul Enterprises
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining advanced technology with regulatory excellence to deliver pharmaceutical solutions that meet global standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50/30 transition-all group hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-slate-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

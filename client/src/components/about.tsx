import { motion } from "framer-motion";
import { Lightbulb, Shield, Users, Award, Leaf, MapPin } from "lucide-react";

export default function About() {
  const coreValues = [
    { icon: Lightbulb, label: "Innovation" },
    { icon: Shield, label: "Integrity" },
    { icon: Users, label: "Collaboration" },
    { icon: Award, label: "Quality" },
    { icon: Leaf, label: "Sustainability" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Who We Are</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To harness creative chemistry and cutting-edge technology to deliver pharmaceutical solutions 
                  that improve global health outcomes while maintaining the highest standards of quality and regulatory compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a global leader in pharmaceutical manufacturing, recognized for innovation, 
                  sustainability, and unwavering commitment to quality across all our production capabilities.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Core Values</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <value.icon className="text-primary" size={20} />
                    <span className="font-medium text-slate-800">{value.label}</span>
                  </motion.div>
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
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern pharmaceutical office headquarters"
              className="rounded-2xl shadow-xl w-full h-auto mb-8"
            />

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Locations</h4>
                  <p className="text-slate-600 text-sm">Operating from strategic locations in India</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Headquarters:</span>
                  <span className="font-medium text-slate-900">New Delhi, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Manufacturing:</span>
                  <span className="font-medium text-slate-900">Ghiloth, Rajasthan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

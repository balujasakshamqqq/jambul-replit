import { motion } from "framer-motion";
import { IdCard, Award, Leaf, Microscope, ClipboardCheck, Users } from "lucide-react";

export default function Quality() {
  const certifications = [
    {
      icon: IdCard,
      title: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practice certification for all three production blocks.",
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management Systems international standard certification.",
    },
    {
      icon: Leaf,
      title: "ISO 14001:2015",
      description: "Environmental Management Systems certification for sustainability.",
    },
  ];

  const qualityFeatures = [
    {
      icon: Microscope,
      title: "Advanced QC Laboratories",
      description: "State-of-the-art analytical equipment and testing protocols for comprehensive quality analysis.",
    },
    {
      icon: ClipboardCheck,
      title: "Comprehensive QA Audits",
      description: "Regular internal and external audits ensuring continuous compliance and improvement.",
    },
    {
      icon: Users,
      title: "Client Inspections",
      description: "Regular facility inspections by clients and regulatory authorities maintaining transparency.",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Commitment to Quality</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every partnership is a promise of quality. Our rigorous quality control labs, 
            comprehensive QA audits, and regular client inspections ensure excellence at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <cert.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
              <p className="text-slate-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Quality Excellence</h3>
              <div className="space-y-6">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern pharmaceutical laboratory equipment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

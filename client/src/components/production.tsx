import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, Pill, Syringe, CheckCircle, Download } from "lucide-react";

export default function Production() {
  const productionBlocks = [
    {
      id: "block1",
      title: "Block I",
      subtitle: "Chemical Synthesis",
      icon: Atom,
      description: "Advanced API manufacturing and chemical intermediates production with state-of-the-art synthesis capabilities and quality control systems.",
      features: [
        "API Production",
        "Chemical Intermediates",
        "Quality Control Labs"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "block2",
      title: "Block II",
      subtitle: "Formulation",
      icon: Pill,
      description: "Comprehensive tablet and capsule manufacturing with advanced coating, packaging, and formulation development capabilities.",
      features: [
        "Tablet Manufacturing",
        "Capsule Production",
        "Coating & Packaging"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "block3",
      title: "Block III",
      subtitle: "Sterile & High-Potency",
      icon: Syringe,
      description: "Specialized sterile manufacturing for injectables and high-potency compounds with controlled environment systems and advanced safety protocols.",
      features: [
        "Sterile Injectables",
        "High-Potency APIs",
        "Controlled Environment"
      ],
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="production" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Production Blocks</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            End-to-end pharmaceutical manufacturing under one roof. Three specialized blocks designed 
            for optimal efficiency and regulatory compliance.
          </p>
        </motion.div>

        <Tabs defaultValue="block1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {productionBlocks.map((block) => (
              <TabsTrigger
                key={block.id}
                value={block.id}
                className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <block.icon size={24} />
                <div className="text-center">
                  <div className="font-semibold">{block.title}</div>
                  <div className="text-xs opacity-80">{block.subtitle}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {productionBlocks.map((block, index) => (
            <TabsContent key={block.id} value={block.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <block.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{block.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-3">{block.subtitle}</h4>
                    <p className="text-slate-600 mb-6">{block.description}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {block.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={block.image}
                      alt={`${block.subtitle} manufacturing`}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-slate-700 mb-6">
            "End-to-end pharmaceutical manufacturing under one roof."
          </p>
          <Button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
            <Download className="mr-2" size={20} />
            Download Facility PDF
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

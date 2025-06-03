import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, TrendingUp, MapPin } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: Rocket,
      title: "Innovation-Driven Culture",
      description: "Work on cutting-edge pharmaceutical technologies and contribute to breakthrough solutions.",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Join a team that values collaboration, knowledge sharing, and collective growth.",
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement in pharmaceutical excellence.",
    },
  ];

  const openings = [
    {
      title: "QC Analyst – Ghiloth Plant",
      department: "Quality Control",
      type: "Full-time",
      location: "Rajasthan",
      description: "Lead analytical testing and quality assurance protocols for pharmaceutical production.",
      badge: "New",
      badgeColor: "bg-primary text-white",
    },
    {
      title: "Production Supervisor – Block II",
      department: "Manufacturing",
      type: "Full-time",
      location: "Rajasthan",
      description: "Oversee formulation production operations and ensure compliance with GMP standards.",
      badge: "Urgent",
      badgeColor: "bg-red-500 text-white",
    },
    {
      title: "Executive Assistant – Delhi HQ",
      department: "Administration",
      type: "Full-time",
      location: "New Delhi",
      description: "Support senior management and coordinate business operations at headquarters.",
      badge: null,
      badgeColor: "",
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Join Our Journey</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Be part of a team driven by mission-focused science, collaborative culture, and the shared vision 
            of advancing global healthcare through innovative pharmaceutical solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Work With Us?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <benefit.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern pharmaceutical workplace and team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Current Openings</h3>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-slate-900">{job.title}</h4>
                      {job.badge && (
                        <Badge className={job.badgeColor}>
                          {job.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-600 mb-2">{job.department} • {job.type}</p>
                    <p className="text-sm text-slate-500 mb-2">{job.description}</p>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="mr-1" size={14} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Don't see a position that matches your expertise? We're always looking for talented professionals.
            </p>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Apply via careers@jambul.com
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

export default function News() {
  const newsArticles = [
    {
      category: "Quality Achievement",
      title: "Jambul Achieves WHO-GMP for All Three Blocks",
      description: "We're proud to announce successful WHO-GMP certification across all our manufacturing blocks, reinforcing our commitment to global quality standards.",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      category: "Industry Event",
      title: "Jambul at CPhI India 2025 – Meet Us There",
      description: "Join us at India's premier pharmaceutical exhibition. Visit our booth to explore partnership opportunities and learn about our latest capabilities.",
      date: "January 8, 2025",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      category: "Innovation",
      title: "Expanding R&D Capabilities in 2025",
      description: "Our continued investment in research and development infrastructure to support next-generation pharmaceutical solutions and formulation development.",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">News & Updates</h2>
          <p className="text-lg text-slate-600">Stay updated with our latest achievements and industry presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{article.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="mr-2" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View All News
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-8 text-center text-white mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-6">Subscribe to our newsletter for the latest news and industry insights</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-slate-900 border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-slate-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Pen, ShieldCheck, Cloud } from "lucide-react";
import { SignInForm } from "@/components/signin/SignInForm";
import { Card } from "@/components/ui/card";
import NavBar from "@/components/landing-page/NavBar";
import Footer from "@/components/landing-page/Footer";

const EntryCard = ({ 
  text, 
  date, 
  rotation, 
  x, 
  y, 
  delay = 0 
}: { 
  text: string; 
  date: string; 
  rotation: number; 
  x: string; 
  y: string; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: rotation, x, y }}
    animate={{ opacity: 1, scale: 1, rotate: rotation, x, y }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="absolute hidden lg:flex flex-col p-5 bg-card border-2 border-foreground/5 rounded-2xl w-60 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.02)]"
  >
    <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">{date}</span>
    <p className="text-sm font-medium leading-relaxed text-foreground/70 italic line-clamp-3">
      "{text}"
    </p>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="relative flex flex-col items-center pt-24 pb-32 px-6">
        
        {/* Simple Background Decor */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,oklch(0.6_0.18_250/0.03)_0%,transparent_70%)] pointer-events-none -z-10" />

        {/* Headline Section */}
        <div className="text-center mb-16 max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-8 border border-primary/20"
          >
            <Sparkles size={14} />
            END-TO-END ENCRYPTED JOURNALING
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl mb-8 leading-[0.95]">
            A private space for your <span className="text-primary italic">wildest</span> thoughts.
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground font-medium leading-relaxed">
            Beautifully simple, incredibly secure. The modern home for your daily reflections and big ideas.
          </p>
        </div>

        {/* Hero Stack */}
        <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[600px] mt-12">
          
          {/* Background Scraps */}
          <EntryCard 
            rotation={-12} x="-300px" y="-140px" delay={0.2}
            date="Oct 14"
            text="Finally feeling like I'm making progress. Small wins every day."
          />
          <EntryCard 
            rotation={8} x="320px" y="-120px" delay={0.4}
            date="Nov 02"
            text="The best coffee is the one shared with good friends. ☕️"
          />
          <EntryCard 
            rotation={-6} x="340px" y="140px" delay={0.6}
            date="Dec 21"
            text="Reflecting on the year. So much to be grateful for."
          />
          <EntryCard 
            rotation={15} x="-320px" y="160px" delay={0.8}
            date="Jan 05"
            text="New goals, new energy. Ready to start writing again."
          />

          {/* Central Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative w-full max-w-md z-10"
          >
            {/* Subtle multi-layer stack effect */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-foreground/5 rounded-[2.5rem] -z-10" />
            
            <Card className="p-10 md:p-12 bg-card border-2 border-foreground/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 rotate-[-4deg]">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-3 tracking-tighter">Welcome Back</h2>
                <p className="text-muted-foreground font-medium italic">Open your secret journal...</p>
              </div>

              <SignInForm />
            </Card>
          </motion.div>
        </div>

        {/* Meaningful Resources Section */}
        <section className="mt-48 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-black tracking-widest text-sm uppercase">CORE PILLARS</span>
              <h2 className="text-5xl md:text-7xl font-bold mt-4 text-foreground">Built for your peace of mind.</h2>
            </div>
            <button className="text-lg font-black underline decoration-4 underline-offset-8 hover:text-primary transition-colors text-foreground">
              View all documentation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Open Sourced", 
                desc: "Transparent code you can audit yourself. Check us out on GitHub and contribute to the future of privacy.",
                link: "https://github.com",
                icon: <ArrowRight className="-rotate-45" />
              },
              { 
                title: "E2E Encrypted", 
                desc: "Your data is encrypted before it ever leaves your device. Only you hold the keys to your secret sanctuary.",
                link: "#",
                icon: <ShieldCheck />
              },
              { 
                title: "Always Synced", 
                desc: "Access your reflections from any device. Securely synced and available whenever inspiration strikes.",
                link: "#",
                icon: <Cloud />
              }
            ].map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                className="group p-10 rounded-[2.5rem] border-4 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 border-2 border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                   {i === 0 ? <ArrowRight className="-rotate-45" size={28} /> : i === 1 ? <ShieldCheck size={28} /> : <Cloud size={28} />}
                </div>
                <h3 className="text-3xl font-black mb-4 text-foreground">{resource.title}</h3>
                <p className="font-medium text-foreground/60 leading-relaxed mb-8 text-lg">
                  {resource.desc}
                </p>
                <div className="flex items-center gap-2 font-black text-sm text-primary uppercase tracking-widest">
                  Learn More <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Interactive Prompts Section */}
        <section className="mt-60 w-full max-w-5xl text-center">
          <div className="mb-20">
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full font-black text-sm border-4 border-foreground mb-8 rotate-[2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              FEELING STUCK? 📝
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-foreground leading-none tracking-tighter">Daily Sparks.</h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-foreground/60 font-medium">
              Click a prompt to start your reflection. No more staring at a blank page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "What is one thing you're proud of today?", rotation: -2 },
              { text: "If you could tell your younger self one thing, what would it be?", rotation: 1 },
              { text: "Describe a small moment that made you smile this morning.", rotation: -1 },
              { text: "What is a challenge you're currently facing, and how are you growing?", rotation: 2 },
            ].map((prompt, i) => (
              <motion.button
                key={i}
                whileHover={{ rotate: prompt.rotation * 1.5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-10 text-left rounded-[2.5rem] border-4 border-foreground bg-card shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div className="flex justify-between items-start gap-6">
                  <p className="text-2xl md:text-3xl font-bold leading-tight italic text-foreground/80">
                    "{prompt.text}"
                  </p>
                  <div className="w-12 h-12 rounded-full border-4 border-foreground flex items-center justify-center shrink-0 bg-primary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <Pen size={20} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Modern CTA */}
        <section className="mt-48 mb-20 text-center">
          <h2 className="text-5xl md:text-7xl mb-12 max-w-3xl mx-auto">Ready to start your journey?</h2>
          <button className="bg-primary text-white px-10 py-5 rounded-2xl text-2xl font-black border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-3 mx-auto">
            Start Writing for Free
            <ArrowRight size={28} />
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

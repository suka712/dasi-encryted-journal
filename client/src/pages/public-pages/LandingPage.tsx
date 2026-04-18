import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimationContainer from "@/components/ui/animation-container";
import MaxWidthWrapper from "@/components/ui/max-width-container";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import Footer from "@/components/landing-page/Footer";
import NavBar from "@/components/landing-page/NavBar";
import { SignInForm } from "@/components/signin/SignInForm";
import { Card } from "@/components/ui/card";

const DoodleSparkle = ({ className }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-8 h-8 text-primary/30", className)}
    animate={{ 
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 0.9, 1]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M12 3V6M12 18V21M6 12H3M21 12H18M18.364 5.63604L16.2426 7.75736M7.75736 16.2426L5.63604 18.364M18.364 18.364L16.2426 16.2426M7.75736 7.75736L5.63604 5.63604" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </motion.svg>
);

const DoodleHeart = ({ className }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-10 h-10 text-rose-400/30", className)}
    animate={{ 
      y: [0, -5, 0],
      rotate: [-5, 5, -5]
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </motion.svg>
);

const DoodleLoop = ({ className }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-20 h-20 text-blue-400/20", className)}
    animate={{ 
      rotate: [0, 360]
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50Z" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round"/>
  </motion.svg>
);

const EntryCard = ({ 
  children, 
  rotation, 
  x, 
  y, 
  delay = 0,
  className 
}: { 
  children: React.ReactNode; 
  rotation: number; 
  x: string; 
  y: string; 
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: rotation, x, y }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      rotate: rotation,
      y: ["calc(" + y + " - 10px)", "calc(" + y + " + 10px)"]
    }}
    transition={{ 
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2
      }
    }}
    className={cn(
      "absolute hidden md:flex flex-col p-4 bg-card border shadow-sm rounded-lg w-48 z-0 pointer-events-none",
      className
    )}
  >
    {children}
  </motion.div>
);

const JournalCard = () => {
  return (
    <div className="relative w-full max-w-4xl min-h-[600px] flex items-center justify-center mt-12">
      {/* Hand-drawn doodles */}
      <DoodleSparkle className="absolute top-0 left-[20%] -rotate-12" />
      <DoodleHeart className="absolute bottom-10 left-[15%] rotate-12" />
      <DoodleLoop className="absolute top-[10%] right-[15%]" />
      <DoodleSparkle className="absolute bottom-[20%] right-[20%] scale-150 text-yellow-400/30 rotate-45" />

      {/* Scattered entries */}
      <EntryCard rotation={-12} x="-220px" y="-150px" delay={0.4} className="bg-yellow-50/50">
        <span className="text-xs text-muted-foreground mb-2">Oct 12, 2023</span>
        <p className="text-sm font-heading italic">"Finally started the new project. Feeling nervous but excited! 🚀"</p>
      </EntryCard>

      <EntryCard rotation={8} x="240px" y="-120px" delay={0.6} className="bg-blue-50/50">
        <span className="text-xs text-muted-foreground mb-2">Nov 04, 2023</span>
        <p className="text-sm font-heading italic">"The weather was perfect today. Had the best coffee by the lake. ☕️"</p>
      </EntryCard>

      <EntryCard rotation={-5} x="260px" y="140px" delay={0.8} className="bg-rose-50/50">
        <span className="text-xs text-muted-foreground mb-2">Dec 21, 2023</span>
        <p className="text-sm font-heading italic">"Reflecting on this year. So much has changed. Grateful for the small wins."</p>
      </EntryCard>

      <EntryCard rotation={15} x="-240px" y="120px" delay={1.0} className="bg-emerald-50/50">
        <span className="text-xs text-muted-foreground mb-2">Jan 02, 2024</span>
        <p className="text-sm font-heading italic">"New Year's resolutions: 1. Write more. 2. Breathe deeper. ✨"</p>
      </EntryCard>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md z-10"
      >
        <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl opacity-50" />
        
        <Card className="relative overflow-hidden border-4 border-primary/20 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[1.5rem]">
          {/* Decorative stickers */}
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold rotate-12 shadow-sm z-20">
            PRIVATE
          </div>
          <div className="absolute top-12 -left-4 bg-primary text-white p-2 rounded-lg -rotate-12 shadow-md z-20">
            <SparklesIcon className="size-4" />
          </div>

          <div className="p-8 pt-12">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-4xl font-heading mb-3">Your Journal</h2>
              <p className="text-muted-foreground font-medium">Safe, secret, and all yours.</p>
            </div>
            <SignInForm className="max-w-none" />
          </div>
          
          {/* Subtle paper texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        </Card>
      </motion.div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* ----------------------------------Hero Section---------------------------------- */}
      <div className="relative flex flex-col justify-center items-center pt-20 md:pt-28 overflow-hidden px-4">
        
        <AnimationContainer>
          <div className="flex flex-col items-center text-center mb-4">
            <h1 className="font-heading text-6xl md:text-9xl leading-none max-w-5xl tracking-tight text-foreground">
              Write your{" "}
              <span className="relative inline-block">
                heart out.
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10" 
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-8 text-center max-w-2xl font-medium">
              The cozy, end-to-end encrypted home for your deepest thoughts and brightest days.
            </p>
          </div>
        </AnimationContainer>

        <JournalCard />
      </div>

      {/* ----------------------------------Features section---------------------------------- */}
      <MaxWidthWrapper className="pt-32 pb-32 relative z-10">
        <AnimationContainer delay={0.3}>
          <div className="flex flex-col w-full items-center justify-center py-12">
            <h2 className="text-center text-5xl md:text-7xl leading-tight font-heading text-foreground">
              Everything you need.
            </h2>
          </div>
        </AnimationContainer>
        
        <AnimationContainer delay={0.4}>
          <BentoGrid className="py-12">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      <Footer />
    </div>
  );
};

export default LandingPage;

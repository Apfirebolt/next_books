import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
      {/* Background Subtle Grid & Ambient Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} 
      />
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl" />

      {/* Interactive Stage Card */}
      <div className="relative flex flex-col items-center">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-inner">
          
          {/* Animated Element */}
          <motion.div
            className="flex items-center justify-center bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-primary/40"
            style={{ width: 84, height: 84 }}
            animate={{
              scale: [1, 1.4, 1.4, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["22%", "22%", "50%", "50%", "22%"],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          >
            {/* Center Core Dot */}
            <div className="h-2.5 w-2.5 rounded-full bg-white/80 shadow-sm" />
          </motion.div>

        </div>

        {/* UI Stage Label */}
        <div className="mt-5 flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Motion Sandbox • Keyframes
        </div>
      </div>
    </div>
  );
}
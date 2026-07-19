import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroVideo = ({ onComplete }: { onComplete: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnd = () => {
      setShow(false);
      setTimeout(onComplete, 600);
    };

    video.addEventListener("ended", handleEnd);
    video.play().catch(() => {
      // Autoplay blocked — skip intro
      setShow(false);
      onComplete();
    });

    return () => video.removeEventListener("ended", handleEnd);
  }, [onComplete]);

  const handleSkip = () => {
    setShow(false);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <video
            ref={videoRef}
            muted
            playsInline
            className="w-full h-full object-contain"
            src="/intro-video.mp4"
          />
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-muted-foreground hover:text-primary font-body text-sm tracking-widest uppercase transition-colors px-4 py-2 border border-border rounded-lg hover:border-primary/30"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;

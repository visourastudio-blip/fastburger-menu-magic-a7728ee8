import visuoraLogo from "@/assets/visuora-logo.png";

const Watermark = () => {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md opacity-70 hover:opacity-100 transition-opacity">
      <img 
        src={visuoraLogo} 
        alt="Visuora Studio" 
        className="w-4 h-4 object-contain"
      />
      <span className="text-[9px] text-muted-foreground font-medium">
        Modelo da Visuora Studio
      </span>
    </div>
  );
};

export default Watermark;

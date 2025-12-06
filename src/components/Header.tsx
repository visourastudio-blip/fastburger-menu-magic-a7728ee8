import logo from "@/assets/fastburger-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container py-3 flex items-center justify-center gap-3">
        <img 
          src={logo} 
          alt="FastBurger Logo" 
          className="w-14 h-14 md:w-16 md:h-16 object-contain animate-fade-in"
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-extrabold text-gradient">
            FASTBURGER
          </h1>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest">
            BURGERS
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

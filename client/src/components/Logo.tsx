import logo from "/logo.svg";

const Logo = () => {
  return (
    <div className="relative p-1 bg-white border-2 border-primary rounded-xl -rotate-6 shadow-[4px_4px_0px_0px_oklch(0.65_0.18_35/0.2)] hover:rotate-0 transition-all duration-300">
      <img
        src={logo}
        className="w-8 h-8 object-contain"
      />
    </div>
  );
};

export default Logo;

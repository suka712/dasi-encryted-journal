interface Props {
  title: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

const MagicBadge = ({
  title,
}: Props) => {
  return (
    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2px] focus:outline-none select-none rotate-2 hover:-rotate-2 transition-transform duration-300">
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default MagicBadge;

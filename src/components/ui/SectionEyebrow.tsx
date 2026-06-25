export function SectionEyebrow({ 
  children, 
  className = "text-cobalt" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <div className="w-8 h-[2px] bg-current" />
      <span className="text-body-md font-bold uppercase tracking-wider">{children}</span>
    </div>
  );
}

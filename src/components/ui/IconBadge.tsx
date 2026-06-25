import { LucideIcon } from "lucide-react";

export function IconBadge({ 
  icon: Icon, 
  className = "" 
}: { 
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cobalt to-cobalt-deep text-white shadow-md flex-shrink-0 ${className}`}>
      <Icon size={28} />
    </div>
  );
}

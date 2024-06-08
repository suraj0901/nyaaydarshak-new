import { Loader } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="grid place-items-center h-[500px]">
      <div className="flex items-center gap-x-2 text-xl text-primary-foreground/70">
        <Loader className="animate-spin" /> Loading blogs
      </div>
    </div>
  );
}

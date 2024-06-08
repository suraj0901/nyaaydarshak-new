import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-black/50">
      <div className="flex items-center gap-x-2">
        <Loader2 className="animate-spin" />
        Loading
      </div>
    </div>
  );
}

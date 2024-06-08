import { Loader as LoaderSvg } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  isLoading: boolean;
  loading_text?: string;
  children?: ReactNode;
}
export default function Loader({ isLoading, loading_text, children }: Props) {
  if (!isLoading) return children;
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-secondary/50 z-50 grid place-items-center text-black/80 text-lg">
        <p className="flex items-center gap-x-1">
          <LoaderSvg className="animate-spin" /> {loading_text}
        </p>
      </div>
      {children}
    </div>
  );
}

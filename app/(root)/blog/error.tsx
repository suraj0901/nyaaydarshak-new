"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorProp {
  error: Error & { digest?: string };
}

export default function Error({ error }: ErrorProp) {
  return (
    <Alert variant="destructive" className="max-w-lg mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
}

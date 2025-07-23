"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ShareButton() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link. Try again.");
    }
  };

  return (
    <Button variant="outline" onClick={handleCopy}>
      Share
    </Button>
  );
}

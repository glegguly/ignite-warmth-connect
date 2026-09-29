import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ember: "bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary-hover",
        ink: "bg-foreground px-6 py-3 text-background hover:bg-foreground/90",
        outlineLight: "border border-background/40 px-6 py-3 text-background hover:bg-background/10",
        language: "px-3 py-1 text-muted-foreground hover:text-foreground",
        languageActive: "bg-foreground px-3 py-1 text-background",
      },
    },
    defaultVariants: { variant: "ember" },
  },
);

function Button({ className, variant, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export { Button, buttonVariants };
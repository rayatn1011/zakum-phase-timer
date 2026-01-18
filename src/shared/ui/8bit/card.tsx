import { cn } from "tailwind-variants";

import {
  Card as ShadcnCard,
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/shared/ui/shadcn/card";

import { useRender } from "@base-ui/react/use-render";

type BitCardProps = useRender.ComponentProps<"div">;

function Card({ className, ...props }: BitCardProps) {
  return (
    <div
      className={cn(
        "relative border-y-6 border-foreground dark:border-ring p-0",
        className,
      )}
    >
      <ShadcnCard
        {...props}
        className={cn("rounded-none border-0 w-full", className)}
      />

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

function CardHeader({ className, ...props }: BitCardProps) {
  return <ShadcnCardHeader className={cn(className)} {...props} />;
}

function CardTitle({ className, ...props }: BitCardProps) {
  return <ShadcnCardTitle className={cn(className)} {...props} />;
}

function CardDescription({ className, ...props }: BitCardProps) {
  return <ShadcnCardDescription className={cn(className)} {...props} />;
}

function CardAction({ className, ...props }: BitCardProps) {
  return <ShadcnCardAction className={cn(className)} {...props} />;
}

function CardContent({ className, ...props }: BitCardProps) {
  return <ShadcnCardContent className={cn(className)} {...props} />;
}

function CardFooter({ className, ...props }: BitCardProps) {
  return (
    <ShadcnCardFooter
      data-slot="card-footer"
      className={cn(className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

export type { BitCardProps };

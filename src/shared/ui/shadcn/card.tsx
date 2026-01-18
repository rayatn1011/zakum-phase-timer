import { useRender } from "@base-ui/react/use-render";
import { cn } from "tailwind-variants";

type CardProps = useRender.ComponentProps<"div">;

function Card({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      ),
      ...props,
    },
  });
}

function CardHeader({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props,
    },
  });
}

function CardTitle({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      ),
      ...props,
    },
  });
}

function CardDescription({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn("text-sm text-muted-foreground", className),
      ...props,
    },
  });
}

function CardAction({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      ),
      ...props,
    },
  });
}

function CardContent({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn("p-6 pt-0", className),
      ...props,
    },
  });
}

function CardFooter({ className, render, ...props }: CardProps) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      className: cn("flex items-center p-6 pt-0", className),
      ...props,
    },
  });
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
};
export type { CardProps };

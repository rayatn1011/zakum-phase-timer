import { Button as PrimitiveButton } from "@base-ui/react/button";
import { type VariantProps, tv, cn } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-none active:translate-y-1 transition-transform relative inline-flex items-center justify-center gap-1.5 border-none m-1.5 cursor-pointer font-bold",
  variants: {
    variant: {
      default: "bg-foreground text-background hover:bg-foreground/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "bg-background border border-foreground hover:bg-accent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 gap-1.5 px-3",
      lg: "h-10 px-6",
      icon: "size-9 mx-1 my-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BitButtonProps = PrimitiveButton.Props &
  VariantProps<typeof buttonVariants>;

function PixelatedBorder({ variant }: { variant?: string }) {
  return (
    <>
      {/* Pixelated border */}
      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground dark:bg-ring" />
      {variant !== "outline" && (
        <>
          {/* Top shadow */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
          <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />
          {/* Bottom shadow */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
          <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
        </>
      )}
    </>
  );
}

function IconBorder() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[5px] md:h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[5px] md:h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -left-1 w-[5px] md:w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -left-1 w-[5px] md:w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute top-1 -right-1 w-[5px] md:w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -right-1 w-[5px] md:w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    </>
  );
}

function Button({
  children,
  variant,
  size,
  className,
  ...props
}: BitButtonProps) {
  const hasBorder =
    variant !== "ghost" && variant !== "link" && size !== "icon";
  const isIcon = size === "icon";

  return (
    <PrimitiveButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {hasBorder && <PixelatedBorder variant={variant} />}
      {isIcon && <IconBorder />}
    </PrimitiveButton>
  );
}

export type { BitButtonProps };
export { Button, buttonVariants };

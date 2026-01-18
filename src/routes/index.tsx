import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/shared/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/8bit/card";
import { exit } from "@tauri-apps/plugin-process";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme, setTheme } = useTheme();

  const handleExit = () => {
    exit(0);
  };

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center h-dvh relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/main-menu-bg.webp')] bg-cover bg-no-repeat bg-position-[120%_center]"
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b to-black from-black/10" />

      <Card className="max-w-xl bg-background/60">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <CardTitle>殘暴炎魔 - 技能計時器</CardTitle>
          <CardDescription>Version 1.0.0</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            className="flex items-center gap-2"
            render={<Link to="/start" />}
          >
            開始倒數
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={handleToggleTheme}
          >
            {`切換${theme === "dark" ? "亮" : "暗"}色`}
          </Button>
          <Button className="flex items-center gap-2" onClick={handleExit}>
            退出
          </Button>
        </CardContent>
        <CardFooter>
          <CardDescription className="text-center w-full text-xs">
            made by 一隻狐狸
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

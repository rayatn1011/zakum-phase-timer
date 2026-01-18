import { ThemeProvider } from "next-themes";
import { RouterProvider } from "./shared/router";

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <RouterProvider />
    </ThemeProvider>
  );
}

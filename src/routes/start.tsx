import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/shared/ui/8bit/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button render={<Link to="/" />}>Back</Button>
    </div>
  );
}

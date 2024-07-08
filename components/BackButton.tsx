import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
  return (
    <Button variant="outline" asChild>
      <Link href="/">
        <MoveLeft className="mr-2"/> Back
      </Link>
    </Button>
  );
}

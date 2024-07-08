import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between p-5 mx-5">
      <h1>Where in the world?</h1>
      <div className="flex gap-2">
        <Moon/>
        <span>Dark Mode</span>
      </div>
    </header>
  );
}

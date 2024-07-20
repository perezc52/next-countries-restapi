import ModeToggle from "./LightDarkToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 px-16 border-b">
      <h1 className="font-bold">Where in the world?</h1>
      <div className="flex gap-2 items-center">
        <ModeToggle/>
        <span>Toggle theme</span>
      </div>
    </header>
  );
}

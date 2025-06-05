import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="EcoSphere"
            className="h-16"
          />
        </Link>

        <div>
          <div
            className={`cursor-pointer flex items-center transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setTheme(isDark ? "light" : "dark")}>
            {isDark ? (
              <Sun className="h-6 w-6 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-950 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

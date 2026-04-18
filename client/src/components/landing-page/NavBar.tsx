import { useState } from "react";

import { Menu, X, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import { ContactDialog } from "./ContactDialog";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import Logo from "../Logo";
import { Button } from "../ui/button";

const NavBar = () => {
  const navigate = useNavigate();
  const { showNavbar } = useScrollNavbar();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xs bg-background/70">
      <nav
        className={`flex items-center mx-auto max-w-7xl px-4 py-4 transition-opacity duration-500 ${
          showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-1 justify-start gap-4">
          <Logo />
          <button
            onClick={() => navigate("/")}
            className="text-xl font-heading"
          >
            Dasi
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex flex-3 gap-2 justify-center">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Privacy</Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Features</Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">About</Button>
        </div>

        {/* Desktop right section */}
        <div className="hidden lg:flex flex-1 gap-2 justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-primary/5 text-primary hover:bg-primary/10">
                  <Globe className="size-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 min-w-[120px]">
                    <NavigationMenuLink asChild>
                      <button className="block w-full px-3 py-2 text-sm rounded-md hover:bg-accent text-left">
                        English
                      </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <button className="block w-full px-3 py-2 text-sm rounded-md hover:bg-accent text-left">
                        Vietnamese
                      </button>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
            <Button onClick={() => navigate("/signin")}>
              Open Journal
            </Button>
        </div>

        {/* Mobile hamburger button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="flex flex-col gap-2 px-4 py-4">
            <Button variant="ghost" className="justify-start">
              Privacy
            </Button>
            <Button variant="ghost" className="justify-start">
              Features
            </Button>
            <Button variant="ghost" className="justify-start">
              About
            </Button>
            <div className="border-t my-2" />
            <p className="text-sm text-muted-foreground px-4">Language</p>
            <Button variant="ghost" className="justify-start">
              English
            </Button>
            <Button variant="ghost" className="justify-start">
              Vietnamese
            </Button>
            <div className="border-t my-2" />
              <Button
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/signin");
                }}
              >
                Open Journal
              </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

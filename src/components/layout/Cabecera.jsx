import { useState } from 'react'
import { TerminalLogo } from '@/components/ui/terminal-logo'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useTheme } from '@/hooks/use-theme'
import { Sun, Moon, Menu } from 'lucide-react'

function Cabecera() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="relative flex items-center justify-end px-4 md:px-8 py-2 sm:py-3 min-h-16 sm:min-h-20 md:min-h-24 lg:min-h-28 sm:pl-[220px] md:pl-[340px] lg:pl-[400px] border-b border-border">
      <TerminalLogo lines={["LEONARDO FLORES", "DEVELOPER"]} speed={120} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-auto" />

      {/* Nav desktop - visible desde md: */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Inicio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Proyectos</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Metodología</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Conversemos</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </Button>
        {/* Menú hamburguesa - solo en móvil */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg size-8 text-foreground hover:bg-muted transition-colors outline-none"
            onClick={() => setSheetOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="size-4" />
          </button>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#inicio">Inicio</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Metodología</a>
              <a href="#contacto">Conversemos</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
export default Cabecera;

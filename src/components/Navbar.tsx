import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="San Miguel Contadores"
              className="h-14 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-1" />
                +54 9 11 5309 2157
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-1" />
                info@sanmiguelcontadores.com.ar
              </div>
            </div>
            <Button variant="cta" size="sm">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
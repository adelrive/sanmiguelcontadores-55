import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">San Miguel Contadores</div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Tu socio estratégico en servicios contables, de auditoría y fiscales. 
              Comprometidos con tu éxito empresarial desde hace más de 15 años.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Contabilidad Integral</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Auditoría Profesional</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Asesoría Fiscal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultoría Empresarial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cumplimiento Normativo</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +54 9 11 5309 2157
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                info@sanmiguelcontadores.com.ar
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  Av. Belgrano 1217 piso 10, of. 106<br />
                  (1093) CABA, Argentina
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 San Miguel Contadores. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Servicios Contables
              <span className="text-accent block">Profesionales</span>
              que Impulsan tu Éxito
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Más de 15 años de experiencia ofreciendo servicios especializados en 
              contabilidad, auditoría e impuestos para empresas que buscan 
              excelencia y crecimiento sostenible.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Asesoría Fiscal Integral
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Auditorías Certificadas
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Consultoría Estratégica
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg">
                Consulta Gratuita
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg text-white border-white hover:bg-white hover:text-primary">
                Ver Servicios
              </Button>
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-hover">
              <h3 className="text-2xl font-semibold text-white mb-6">
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">15+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Años de Experiencia</h4>
                    <p className="text-white/80 text-sm">Sólida trayectoria en el sector</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">500+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Clientes Satisfechos</h4>
                    <p className="text-white/80 text-sm">Empresas que confían en nosotros</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Soporte Dedicado</h4>
                    <p className="text-white/80 text-sm">Atención personalizada siempre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Award, Target, Lightbulb, Heart } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 25 años en el sector con certificaciones profesionales reconocidas internacionalmente."
  },
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description: "Cada cliente recibe atención especializada adaptada a sus necesidades específicas y sector de actividad."
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías y metodologías para optimizar nuestros servicios y tu experiencia."
  },
  {
    icon: Heart,
    title: "Compromiso Total",
    description: "Tu éxito es nuestro objetivo. Trabajamos como parte de tu equipo para alcanzar tus metas empresariales."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir San Miguel Contadores?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia,
            la innovación y el servicio personalizado que cada cliente merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-professional animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nuestros Números Hablan
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte Disponible</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <blockquote className="text-muted-foreground italic">
                "San Miguel Contadores ha sido fundamental en el crecimiento de nuestra empresa.
                Su profesionalismo y dedicación nos han permitido centrarnos en
                nuestro core business con total tranquilidad."
              </blockquote>
              <div className="mt-4 font-semibold text-foreground">
                — Leandro Martinez, CEO BridgeSuite Group
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import { Calculator, FileSearch, TrendingUp, Users, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Calculator,
    title: "Contabilidad Integral",
    description: "Llevamos la contabilidad completa de tu empresa con precisión y cumplimiento normativo.",
    features: [
      "Registro contable diario",
      "Estados financieros",
      "Conciliaciones bancarias",
      "Control de inventarios"
    ]
  },
  {
    icon: FileSearch,
    title: "Auditoría Profesional",
    description: "Auditorías externas e internas que garantizan la transparencia y confiabilidad de tus finanzas.",
    features: [
      "Auditoría de estados financieros",
      "Auditoría interna",
      "Due diligence",
      "Revisiones limitadas"
    ]
  },
  {
    icon: TrendingUp,
    title: "Asesoría Fiscal y de Nómina",
    description: "Optimización fiscal estratégica para maximizar tus beneficios y cumplir con la normativa.",
    features: [
      "Planificación fiscal",
      "Declaraciones de impuestos",
      "Liquidación de sueldos y cargas sociales",
      "Optimización tributaria"
    ]
  },
  {
    icon: Users,
    title: "Consultoría Empresarial",
    description: "Asesoramiento estratégico para el crecimiento y desarrollo de tu negocio.",
    features: [
      "Análisis financiero",
      "Planes de negocio",
      "Reestructuraciones",
      "Valoraciones empresariales"
    ]
  },
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    description: "Te mantenemos al día con todas las obligaciones legales y normativas.",
    features: [
      "Compliance corporativo",
      "Adaptación a nuevas normativas",
      "Procedimientos internos",
      "Formación especializada"
    ]
  },
  {
    icon: Clock,
    title: "Soporte Continuo",
    description: "Disponibilidad permanente para resolver tus dudas y urgencias contables.",
    features: [
      "Atención 24/7",
      "Consultas telefónicas",
      "Reuniones periódicas",
      "Informes mensuales"
    ]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios contables, de auditoría y fiscales
            diseñados para satisfacer las necesidades específicas de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
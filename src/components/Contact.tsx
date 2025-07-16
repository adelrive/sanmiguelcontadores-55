import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contacta con Nuestros Expertos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Programa una consulta gratuita y
            descubre cómo podemos optimizar la gestión financiera de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-2">+54 9 11 5309 2157</p>
                <p className="text-muted-foreground">Línea directa para consultas urgentes</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Mail className="w-5 h-5 mr-2 text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-2">info@sanmiguelcontadores.com.ar</p>
                <p className="text-muted-foreground">Respuesta garantizada en 24 horas</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-accent" />
                  Oficina Principal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">
                  Av. Belgrano 1217 piso 10, of. 106
                </p>
                <p className="text-muted-foreground">CABA, Argentina</p>
              </CardContent>
            </Card>

          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-professional animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Solicita tu Consulta Gratuita
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+54 9 11 0000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Servicio de Interés
                </label>
                <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                  <option>Selecciona un servicio</option>
                  <option>Contabilidad Integral</option>
                  <option>Auditoría Profesional</option>
                  <option>Asesoría Fiscal</option>
                  <option>Consultoría Empresarial</option>
                  <option>Cumplimiento Normativo</option>
                  <option>Otro servicio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Cuéntanos más sobre tus necesidades..."
                />
              </div>

              <Button variant="professional" size="lg" className="w-full">
                Solicitar Consulta Gratuita
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo
                para programar tu consulta gratuita.
              </p>
              <form
                action="https://formspree.io/f/mgvzeqnj"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    required
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+54 9 11 0000 0000"
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>

                <select
                  name="servicio"
                  required
                  className="w-full px-4 py-2 border rounded mt-4"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Contabilidad mensual">Contabilidad mensual</option>
                  <option value="Impuestos">Impuestos</option>
                  <option value="Auditoría">Auditoría</option>
                  <option value="BPO / Administración">BPO / Administración</option>
                  <option value="Otros">Otros</option>
                </select>

                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos más sobre tus necesidades..."
                  required
                  className="w-full px-4 py-2 border rounded"
                  rows={4}
                />

                <Button type="submit" variant="cta" size="lg">
                  Solicitar Consulta Gratuita
                </Button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
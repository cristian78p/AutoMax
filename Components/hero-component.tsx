import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between px-16 py-20">
      <div className="w-1/2 max-w-2xl bg-white shadow-2xl rounded-3xl p-10 animate-fadeIn">
            <div className="flex flex-col items-center mb-8">
                <Image src="/logo.png" alt="AUTOMAX Logo" width={300} height={300} className="mb-3 drop-shadow-md" />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-left">
                Bienvenido a Auto Max
            </h2>

            <div className="text-gray-600 text-lg leading-relaxed text-left">
                La página de venta de carros es una plataforma en línea diseñada para conectar compradores y vendedores de vehículos de manera eficiente y segura. Permite a los usuarios explorar un amplio catálogo de automóviles nuevos y usados, filtrando por marca, modelo, año, precio, tipo de combustible y otras características importantes.<br></br><br></br>

                El sitio ofrece detalles completos de cada vehículo, incluyendo fotos de alta calidad, especificaciones técnicas, historial de mantenimiento y ubicación del vendedor. Los usuarios pueden crear cuentas para guardar sus vehículos favoritos, recibir alertas de precios o disponibilidad, y contactar directamente al vendedor a través de chat o formularios de contacto.<br></br><br></br>

                Adicionalmente, la plataforma puede incluir servicios complementarios como comparación de vehículos, financiamiento, seguros, reseñas de usuarios y recomendaciones personalizadas basadas en inteligencia artificial para ayudar a los compradores a tomar decisiones informadas. El diseño de la página se centra en la facilidad de navegación, la búsqueda rápida y la experiencia de usuario, asegurando que tanto compradores como vendedores tengan un proceso intuitivo y confiable.<br></br>
            </div>
      </div>

      <div className="w-1/2 flex justify-end animate-fadeIn delay-200">
        <div className="relative">
          <div className="absolute -inset-4 bg-white rounded-3xl blur-2xl "></div>
          <Image
            src="/car-feature.png"
            alt="Carro destacado"
            width={500}
            height={500}
            className="relative rounded-3xl shadow-2xl object-cover transform transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
import { ReactNode } from 'react';
import { Truck } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showFooter?: boolean;
}

const AuthLayout = ({ children, title, subtitle, showFooter = true }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Fondo de imagen con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKEazv5iGkd0A40eapOtnCJ6ECZE9yfqytQ&s')`,
          filter: 'blur(8px)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      {/* Card principal */}
      <div className="relative z-10 max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-2xl px-8 py-10 backdrop-blur-sm border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <Truck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">{subtitle}</p>
          </div>

          {/* Contenido dinámico */}
          {children}
        </div>

        {/* Footer con información adicional */}
        {showFooter && (
          <div className="text-center">
            <p className="text-white text-sm opacity-90">
              © 2025 FleteShare. Todos los derechos reservados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;

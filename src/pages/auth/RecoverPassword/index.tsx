import { Form, Formik } from 'formik';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { validationSchema } from './schema';
import { useRecoverPassword } from './useRecoverPassword';
import AuthLayout from '@/layouts/AuthLayout';

const RecoverPassword = () => {
  const { recoverSent, initialValues, isLoading, error, handleRecoverPassword } =
    useRecoverPassword();

  return (
    <AuthLayout
      title={recoverSent ? 'Correo enviado' : 'Recuperar contraseña'}
      subtitle={
        recoverSent
          ? 'Revisa tu bandeja de entrada'
          : 'Ingresá tu correo para recibir instrucciones'
      }
    >
      {/* Error message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-md">
          <div className="text-red-700 text-sm font-medium">{error}</div>
        </div>
      )}

      {recoverSent ? (
        /* Estado de éxito */
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <p className="text-green-600 font-medium">
              ¡Listo! Enviamos un correo electrónico con instrucciones para restablecer tu
              contraseña.
            </p>

            <p className="text-sm text-gray-500">
              Si no recibís el correo en los próximos minutos, revisá tu carpeta de spam o correos
              no deseados.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Link to={ROUTES.LOGIN} className="block">
              <Button variant="primary" fullWidth className="h-12">
                <ArrowLeft size={18} className="mr-2" />
                Volver al inicio de sesión
              </Button>
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="w-full text-center text-sm text-primary-600 hover:text-primary-500 font-medium transition-colors py-2"
            >
              Enviar correo nuevamente
            </button>
          </div>
        </div>
      ) : (
        /* Formulario de recuperación */
        <div className="space-y-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleRecoverPassword(values.username);
              setSubmitting(false);
            }}
          >
            {formik => (
              <Form className="space-y-6">
                <Input
                  required
                  fullWidth
                  label="Correo electrónico"
                  type="email"
                  id="username"
                  name="username"
                  placeholder="tu@email.com"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.errors.username}
                  icon={<Mail size={18} />}
                />

                <div className="pt-2">
                  <Button
                    type="button"
                    onClick={() => formik.handleSubmit()}
                    variant="primary"
                    fullWidth
                    isLoading={isLoading}
                    disabled={formik.isSubmitting || !formik.isValid}
                    className="h-12 text-base font-semibold"
                  >
                    {isLoading ? 'Enviando instrucciones...' : 'Enviar instrucciones'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Link de regreso al login */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              ¿Recordaste tu contraseña?{' '}
              <Link
                to={ROUTES.LOGIN}
                className="text-primary-600 hover:text-primary-500 font-medium transition-colors"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default RecoverPassword;

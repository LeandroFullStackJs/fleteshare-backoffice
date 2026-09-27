import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, FileText, Users, MessageCircle, Settings } from 'lucide-react';
import { ROUTES } from '@/utils/constants';
import { MenuItem } from './header.interface';

export const useHeader = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home size={20} />,
      path: ROUTES.DASHBOARD || '/dashboard',
    },
    {
      id: 'account',
      label: 'Mi Perfil',
      icon: <Settings size={20} />,
      path: ROUTES.PROFILE || '/mi-perfil',
    },
    {
      id: 'requests',
      label: 'Solicitudes',
      icon: <FileText size={20} />,
      path: '/solicitudes',
      badge: 5, // Ejemplo: 5 solicitudes pendientes
    },
    {
      id: 'users',
      label: 'Usuarios',
      icon: <Users size={20} />,
      path: '/usuarios',
      badge: 2, // Ejemplo: 2 usuarios por validar
    },
    {
      id: 'contact',
      label: 'Contacto',
      icon: <MessageCircle size={20} />,
      path: '/contacto',
      badge: 3, // Ejemplo: 3 mensajes nuevos
    },
  ];

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return {
    menuItems,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleMobileMenuToggle,
    handleMobileMenuClose,
  };
};

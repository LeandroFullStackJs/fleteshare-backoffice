export const VITE_API_URL = import.meta.env.VITE_API_URL;
export const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export enum ROUTES {
  LOGIN = '/iniciar-sesion',
  RECOVER_ACCOUNT = '/recuperar-cuenta',
  DASHBOARD = '/dashboard',
  PROFILE = '/mi-perfil',
  USERS = '/usuarios',
  USERS_DETAILS = '/usuarios/:id',
  FREIGHT = '/fletes',
  FREIGHT_DETAILS = '/fletes/:id',
  NOT_FOUND = '/*',
}

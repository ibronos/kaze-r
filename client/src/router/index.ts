import { useRoutes } from 'react-router-dom';
import mainRoutes from './mainRoutes';
import adminRoutes from './adminRoutes';

export default function ThemeRoutes() {
  return useRoutes([mainRoutes, adminRoutes]);
}

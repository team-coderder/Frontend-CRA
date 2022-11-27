import { useRoutes } from 'react-router-dom';

import mainRoutes from './mainRoutes';

export default function ThemeRoutes() {
    return useRoutes(mainRoutes());
}

// pages/dashboard/withAuth.jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDashboardAuth } from '../../../context/DashboardAuthContext.js';
import { RoleEnum } from '../../../enums/role.js';

const withAuth = (Component) => {
  const AuthRoute = ({ ...props }) => {
    const { user, isAuthenticated } = useDashboardAuth(); 
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    // Shembull: kush lejohet të hyjë te /dashboard/dashboard ose /dashboard/map/mapdata?
    const isDashboardPath = router.pathname === '/dashboard/dashboard';
    const isMapDataPath = router.pathname === '/dashboard/map/mapdata';

    useEffect(() => {
      // Siguron ekzekutimin vetëm në browser, jo SSR
      setIsClient(true);
    }, []);

    if (isClient) {
      // 1. Nëse s’është autentikuar -> login
      if (!isAuthenticated) {
        router.push('/dashboard/login');
        return null;
      }

      // 2. Nëse user-i është ADMIN, e ridrejtojmë në /dashboard/dashboard
      //    nëse nuk është te path-et e lejuara
      if (user?.role === RoleEnum.ADMIN && !isDashboardPath && !isMapDataPath) {
        router.push('/dashboard/dashboard');
        return null;
      }

      // 2.bis (opsionale): Nëse user-i është SUPERADMIN, 
      //    mund të kontrollosh ndryshe (ose ta trajtosh njësoj si admin).
      // if (user?.role === RoleEnum.SUPERADMIN && ... ) { ... }
    }

    // 3. Shfaq komponentin e mbrojtur
    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    AuthRoute.getInitialProps = Component.getInitialProps;
  }

  return AuthRoute;
};

export default withAuth;

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDashboardAuth } from '../../../context/DashboardAuthContext.js';
import { RoleEnum } from '../../../enums/role.js';
const withAuth = (Component) => {
  const AuthRoute = ({ ...props }) => {
    const { isAuthenticated, user } = useDashboardAuth();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const isDashboardPath = router.pathname === '/dashboard/dashboard';
    const isMapDataPath = router.pathname === '/dashboard/map/mapdata';

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (isClient && !isAuthenticated()) {
      router.push('/dashboard/login');
      return null;
    } else if (user?.role === RoleEnum.ADMIN && !isDashboardPath && !isMapDataPath) {
      router.push('/dashboard/dashboard');
      return null;
    }
    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    AuthRoute.getInitialProps = Component.getInitialProps;
  }
  return AuthRoute;
};

export default withAuth;

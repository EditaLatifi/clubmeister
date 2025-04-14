import '../styles/globals.css';
import { DashboardAuthProvider } from '../../context/DashboardAuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <DashboardAuthProvider>
      <Component {...pageProps} />
    </DashboardAuthProvider>
  );
}

export default MyApp;

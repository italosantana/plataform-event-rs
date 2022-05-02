import { Home } from './pages/home';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnv from './services/RelayEnv';

export const App = () => {
  return (
   <RelayEnvironmentProvider environment={RelayEnv}>
      <Home/>
   </RelayEnvironmentProvider>
  )
}
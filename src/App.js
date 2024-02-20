import { RouterProvider } from 'react-router-dom';
import PageRouters from './router';
import StoreProvider from './store/provider';

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={PageRouters} />
    </StoreProvider>
  );
}

export default App;

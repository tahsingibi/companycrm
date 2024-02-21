import { RouterProvider } from 'react-router-dom';
import PageRouters from './router';
import { fetchYearlyIncome } from './store/actions/yearlyIncome';
import StoreProvider from './store/provider';
import store from './store/store';

export default function App() {
  store.dispatch(fetchYearlyIncome());

  return (
    <StoreProvider>
      <RouterProvider router={PageRouters} />
    </StoreProvider>
  );
}

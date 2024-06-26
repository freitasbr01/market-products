import { BrowserRouter } from 'react-router-dom';

import { App } from '../pages/App';

export function AppRoute() {

  return (
    <BrowserRouter>
      {<App />}
    </BrowserRouter>
  )
}
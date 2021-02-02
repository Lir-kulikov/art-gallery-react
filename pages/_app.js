import { AppWrapper } from '../context/context.js';

import '../styles/_reset.scss';
import '../styles/_variables.scss';
import '../styles/_mixins.scss';
import '../styles/_base.scss'


// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {

  return (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
  );
  
}
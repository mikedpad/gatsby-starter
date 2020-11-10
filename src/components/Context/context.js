import { createContext, useState } from 'react';

const SiteContext = createContext([{}, () => {}]);

const SiteProvider = ({ children }) => {
  const [state, setState] = useState({
    count: 0,
  });

  return <SiteContext.Provider value={[state, setState]}>{children}</SiteContext.Provider>;
};

export { SiteContext, SiteProvider };

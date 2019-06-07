import React, { useState } from 'react';

const SiteContext = React.createContext([{}, () => {}]);

const SiteProvider = ({ children }) => {
  const [state, setState] = useState({
    count: 0,
  });

  return <SiteContext.Provider value={[state, setState]}>{children}</SiteContext.Provider>;
};

export { SiteContext, SiteProvider };

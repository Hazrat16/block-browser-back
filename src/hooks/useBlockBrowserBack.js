import { useEffect } from "react";

export const useBlockBrowserBackButton = () => {
  useEffect(() => {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
      };
  }, []);
};


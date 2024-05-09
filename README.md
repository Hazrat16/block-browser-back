## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i block-browser-back
```

How to use 

```sh
import React from "react";
import { useBlockBrowserBackButton } from "block-browser-back";

const YourComponent = () => {
  useBlockBrowserBackButton();

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default YourComponent;
```





## License

MIT

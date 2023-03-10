import "dotenv/config";

import { server } from "./src/server";

(async () => {
  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`Server is running on :${port}`);
  });
})();

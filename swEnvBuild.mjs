// This script generates a swEnv.js file in the dist/ directory
// containing environment variables for the service worker.

import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "./.env.local" });

fs.writeFileSync(
  "./dist/swEnv.js",
  `
const process = {
  env: {
    VITE_SELF_URL: "${process.env.VITE_SELF_URL}",
    VITE_DORM_URL: "${process.env.VITE_DORM_URL}"
  }
}
`
);

console.log("✅ SW env file created (dist/swenv.js)");

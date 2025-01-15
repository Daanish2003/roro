import app from "./index";
import http from "node:http";
import dotenv from "dotenv";
import { initializeSocket } from "./socket";
import { mediasoupService } from "./mediasoup/mediasoup-service";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8000;

// Initialize services
(async () => {
  try {
    await mediasoupService.initialize();
    console.log("MediaSoup worker and router initialized")

    await initializeSocket(server);
    console.log("Socket server initialized")

    server.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    })
  } catch (error) {
    console.error("Failed to initialized services:", error)
    process.exit(1)
  }
})();

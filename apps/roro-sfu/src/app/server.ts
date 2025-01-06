import app from "./index";
import http from "http";
import dotenv from "dotenv";
import { initializeSocket } from "./socket";
import { createWorker } from "./mediasoup" 

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8000;

// Initialize socket server
(async () => {
  try {
    await initializeSocket(server);
    console.log("Socket server initialized.");
  } catch (error) {
    console.error("Failed to initialize socket server:", error);
  }
})();

(async () => {
  try {
    await createWorker();
    console.log("Worker started")
  } catch (error) {
    console.error("Failed to create a worker")
  }
})

// Start HTTP server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import { Server } from "socket.io"
import { Server as HttpServer } from "http"
import { router } from "../mediasoup"
import { createWebRtcTransport } from "../mediasoup/createWebRtcTransport"



export const initializeSocket  = async (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
        origin: "*"
    }
  })

  io.on('connection', (socket) => {
    console.log("New client connected")

    socket.on('joinRoom', async (roomId, callback) => {
      // Room joining logic
      console.log(`Client joined room: ${roomId}`);

      // create a transport for the client
      const transport = await createWebRtcTransport(router);
      callback({ transportOptions: transport});

    
    })
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
  })
}


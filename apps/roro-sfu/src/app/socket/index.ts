import { Server } from "socket.io"
import { Server as HttpServer } from "http"
import { router } from "../mediasoup"
import { Router } from "mediasoup/node/lib/types"


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

const createWebRtcTransport = async (router: Router) => {
  const transport = await router.createWebRtcTransport({
    listenIps: [{ip: '0.0.0.0', announcedIp: 'YOUR_SERVER_IP'}],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
  })

  transport.on('dtlsstatechange', dtlsState => {
    if (dtlsState === 'closed') {
      transport.close()
    }
  });

  transport.on('routerclose', () => {
    console.log("Transport's associated router was close")
  });

  return transport
}
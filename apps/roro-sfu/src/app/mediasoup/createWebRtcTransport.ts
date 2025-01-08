import { mediasoupService } from "./mediasoup-service";

export const createWebRtcTransport = async () => {
  const router = mediasoupService.getRouter();

  if (!router) {
    throw new Error("MediaSoup router not initialized");
  }
    try {
      const transport = await router.createWebRtcTransport({
        listenIps: [{ip: '0.0.0.0', announcedIp: '127.0.0.1'}],
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
    } catch (error) {
      console.log("Failed to create transport:", error)
      throw error;
    }
  }
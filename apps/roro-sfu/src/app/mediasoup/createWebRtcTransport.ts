import { Router } from "mediasoup/node/lib/types"

export const createWebRtcTransport = async (router: Router) => {
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
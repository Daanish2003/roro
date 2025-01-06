import mediasoup from "mediasoup";
import { Router, RtpCodecCapability, WorkerSettings } from "mediasoup/node/lib/types";

const workerSettings: WorkerSettings = {
  logLevel: "warn",
  rtcMinPort: 10000,
  rtcMaxPort: 10100,
};

const mediaCodecs: RtpCodecCapability[] = [
  {
    kind: "audio",
    mimeType: "audio/opus",
    clockRate: 48000,
    channels: 2,
  },
  {
    kind: "video",
    mimeType: "video/VP8",
    clockRate: 90000,
  },
];

let worker;
let router: Router;

export const createWorker = async () => {
  worker = await mediasoup.createWorker(workerSettings);
  worker.on(`died`, () => {
    console.error(`MediaSoup worker has died`);
  });

  router = await worker.createRouter({ mediaCodecs});
};

export { router, worker };

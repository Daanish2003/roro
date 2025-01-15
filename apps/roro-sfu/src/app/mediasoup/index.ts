import type { RouterOptions, RtpCodecCapability, WorkerSettings } from "mediasoup/node/lib/types";

export const workerSettings: WorkerSettings = {
  logLevel: "warn",
  rtcMinPort: 10000,
  rtcMaxPort: 10100,
};

const mediaCodecs: RtpCodecCapability[] = [
  {
    kind: 'audio',
    mimeType: 'audio/opus',
    clockRate: 48000,
    channels: 2,
    parameters: {},
    rtcpFeedback: []
  },
  {
    kind: 'video',
    mimeType: 'video/VP8',
    clockRate: 90000,
    parameters: {},
    rtcpFeedback: [
      { type: 'nack' },
      { type: 'nack', parameter: 'pli' },
      { type: 'ccm', parameter: 'fir' }
    ]
  }
];

export const routerOptions: RouterOptions = {
  mediaCodecs
};

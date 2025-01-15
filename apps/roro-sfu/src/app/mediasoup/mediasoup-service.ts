import type { Router, Worker } from "mediasoup/node/lib/types";
import { createWorker } from "mediasoup"
import { routerOptions, workerSettings } from ".";

export class MediasoupService {
    private static instance: MediasoupService;
    private worker: Worker | null = null
    private router: Router | null = null

    private constructor(){}

    public static getInstance(): MediasoupService {
        if (!MediasoupService.instance) {
            MediasoupService.instance = new MediasoupService();
        }
        return MediasoupService.instance
    }

    public async initialize(): Promise<Router> {
        if(!this.worker) {
            this.worker = await createWorker(workerSettings)
            console.log(this.worker)

            this.worker.on("died", () => {
                console.error("Mediasoup worker has died")
                this.worker = null
                this.router = null
            });

            this.router = await this.worker.createRouter(routerOptions)
            console.log("MediaSoup worker and router initialized successfully");
        }

        if (!this.router) {
            throw new Error("Router initialization failed")
        }

        return this.router
    }

    public getRouter(): Router | null {
        return this.router
    }
}

export const mediasoupService = MediasoupService.getInstance()
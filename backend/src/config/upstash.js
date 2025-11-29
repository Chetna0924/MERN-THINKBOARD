import {Ratelimit} from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();
export const redis= Redis.fromEnv(); 

const ratelimit=new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(4,"15 s"),
    analytics:true,
    prefix:"rate-limit",
});
export default ratelimit;
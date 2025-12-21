import {Ratelimit} from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
import rateLimiter from "../middleware/rateLimiter";
dotenv.config();
export const redis= Redis.fromEnv(); 

const ratelimit=new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2000,"10 s"),
    analytics:true,
    prefix:"rate-limit",
});
const rateLimiter = async (req, res, next) => {
  const identifier = req.ip || "anonymous";
  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return res.status(429).json({ message: "Rate limit exceeded" });
  }

  next();
};
export default rateLimiter;
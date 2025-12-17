import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.ip ||
      "anonymous";

    const { success, limit, remaining, reset } =
      await ratelimit.limit(identifier);

    console.log("RATE LIMIT:", { success, remaining });

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
        limit,
        remaining,
        reset,
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    next(); // app crash mat hone do
  }
};

export default rateLimiter;

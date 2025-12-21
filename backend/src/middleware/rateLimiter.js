import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.ip ||
      "anonymous";

    const { success, remaining } = await ratelimit.limit(identifier);

    console.log("RATE LIMIT:", { identifier, success, remaining });

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    return res.status(429).json({
      message: "Rate limit service unavailable",
    });
  }
};

export default rateLimiter;

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // 🔥 correct client IP
    const identifier =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.ip ||
      "anonymous";

    const { success, limit, remaining, reset } =
      await ratelimit.limit(identifier);

    console.log("RATE LIMIT:", {
      ip: identifier,
      success,
      remaining,
    });

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

    // ❌ DO NOT allow request when limiter fails
    return res.status(429).json({
      message: "Rate limit service unavailable",
    });
  }
};

export default rateLimiter;

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.ip ||
      "anonymous";

    const result = await ratelimit.limit(identifier);

    console.log("RATE LIMIT:", {
      identifier,
      success: result.success,
      remaining: result.remaining,
    });

    if (!result.success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    // ✅ allow request
    next();
  } catch (error) {
    console.error("Rate limiter failed, allowing request:", error.message);

    // 🔥 IMPORTANT: Redis fail → DO NOT BLOCK API
    next();
  }
};

export default rateLimiter;

/*import ratelimit from "../config/upstash.js";
const rateLimiter = async(req,res,next)=>{
try{
 const {success}=await ratelimit.limit("my-limit-key");
if(!success){
    return res.status(429).json({
        message :"too many request, please try again later"
    });
}
next();
}

catch(error){
console.log("rate limit error",error);
next(error);
}
};
export default rateLimiter;*/
// backend/src/middleware/ratelimiters.js
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // use some identifier (IP for now)
    const identifier = "global-limit";
    const result= await ratelimit.limit(identifier);
    console.log("rate limit result",result);
    
    const { success, limit, remaining, reset } = result;

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
    console.log("Rate limit error:", error);
    next(error); // forward to error handler
  }
};

export default rateLimiter;


const defaultOrigins = ["http://localhost:5174", "http://localhost:5173", "http://localhost:3000", "http://localhost:3001"];
const envOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim())
  : [];

const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

var corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, server-to-server) or matching origins
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
      callback(null, true);
    } else {
      callback(null, true); // Fallback allow in dev/production with credentials
    }
  },
  credentials: true,
};

module.exports = corsOptions;


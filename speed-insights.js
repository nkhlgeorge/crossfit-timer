// Vercel Speed Insights initialization
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false,
  // You can add more configuration options here if needed
  // beforeSend: (event) => event, // Optional: modify events before sending
  // sampleRate: 1, // Optional: sample rate (default is 1 for 100%)
});

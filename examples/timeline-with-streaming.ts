// https://github.com/neet/masto.js/blob/main/examples/timeline-with-streaming.ts
import { login } from "masto";

(async () => {
  const masto = await login({
    url: process.env.url!,
    accessToken: process.env.token,
  });

  // Connect to the streaming api
  const stream = await masto.stream.streamPublicTimeline();

  // Subscribe to updates
  stream.on("update", (status) => {
    console.log(`${status.account.username}: ${status.content}`);
  });

  // Subscribe to notifications
  stream.on("notification", (notification) => {
    console.log(`${notification.account.username}: ${notification.type}`);
  });
})();

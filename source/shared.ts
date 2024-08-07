import { Bot } from "@grammy";

export const bot = new Bot("234234234234234", {
  client: {
    canUseWebhookReply: (method) => method === "sendChatAction",
  },
});

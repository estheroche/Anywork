import { createWeb3Modal } from "@reown/appkit";
import { defaultConfig } from "@reown/appkit-adapter-wagmi";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const modal = createWeb3Modal({
  wagmiConfig: defaultConfig({
    projectId,
    chains: ["optimism", "base"],
    metadata: {
      name: "ANYWORK",
      description: "Connect verified artisans with clients across Africa",
      url: "https://anywork.africa",
      icons: ["https://avatars.githubusercontent.com/u/37784886"],
    },
  }),
  projectId,
  enableAnalytics: true,
});

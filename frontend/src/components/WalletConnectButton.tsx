import { useWeb3Modal } from "@reown/appkit";
import { WalletIcon } from "@heroicons/react/24/outline";
import { useAccount } from "wagmi";

export const WalletConnectButton = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <button
      onClick={() => open()}
      className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
    >
      <WalletIcon className="w-5 h-5 mr-2" />
      {isConnected ? (
        <span>
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
};

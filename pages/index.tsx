import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Swal from "sweetalert2";

const truncateStr = (fullStr: any, strLen: any) => {
  if (fullStr.length <= strLen) return fullStr;

  const separator = "...";
  const seperatorLength = separator.length;
  const charsToShow = strLen - seperatorLength;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return (
    fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - backChars)
  );
};

export default function HomePage() {
  const {
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    account,
    Moralis,
    deactivateWeb3,
  } = useMoralis();
  return (
    <div className="h-[100vh] bg-white the-container text-white">
      <nav className="max-w-[1200px] w-full mx-auto h-[15vh]">
        <ul className="flex justify-between py-4">
          <li>Walao</li>
          <li>
            <button
              className="p-2 bg-blue text-white rounded-[15px]"
              onClick={async () => {
                if (!isWeb3Enabled) {
                  const res = await enableWeb3();
                  console.log(res, "<<<");
                  if (!res) {
                    Swal.fire({
                      title: "You don't have Metamask downloaded!",
                      html: "Please download Metamask at <a href='https://metamask.io/download/' target='_blank'>https://metamask.io/download/</a>",
                    });
                  }
                  if (typeof window !== "undefined" && res) {
                    window.localStorage.setItem("connected", "injected");
                  }
                } else {
                  await deactivateWeb3();
                }
              }}
            >
              {account
                ? `Connected to ${account.slice(0, 6)}... ${account.slice(
                    account.length - 4
                  )}`
                : "Metamask Login"}
            </button>
          </li>
        </ul>
      </nav>
      <div className="max-w-[1000px] w-full mx-auto h-[85vh]">
        <div className="grid grid-cols-2 gap-x-8 h-full">
          <div className="flex flex-col gap-6 justify-center items-center h-full">
            <p className="text-left">
              Welcome to the Presale of Boston Dynamics Inu
            </p>
            <p>
              Buy $BDINU tokens at a very discounted price in the Presale. Swap
              ETH for $BDINU without any fees at the lowest price. During the
              Presale $BDINU is available for only $0.21 compared to the public
              sale for $0.53
            </p>
            <img className="w-[240px] h-[240px]" src="bdinu.png" />
          </div>
          <div className="flex flex-col mt-[65px] items-center gap-3 bg-black h-fit p-4 rounded-[15px]">
            <p>PRESALE ENDING SOON</p>
            <p>1 BDINU = $0.21 USDT</p>
            <p>69.06% SOLD</p>
            <p>WALAO</p>
            <p>ETH RAISED - 107.564 ETH</p>
            <button className="bg-blue w-full p-3 rounded-[10px] text-white">
              Buy With USDT
            </button>
            <button className="bg-blue w-full p-3 rounded-[10px] text-white">
              Buy With ETH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

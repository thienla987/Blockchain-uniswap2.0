import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x1a9Cee618f07FfE4AF4de182a8c60E7242E551D2"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/bEdnzhuvm-7-G31I0Rsmsfsu_69DsmJ7",
  },
};
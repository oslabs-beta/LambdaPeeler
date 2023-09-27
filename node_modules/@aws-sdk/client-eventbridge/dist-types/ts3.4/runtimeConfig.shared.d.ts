import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { EventBridgeClientConfig } from "./EventBridgeClient";
export declare const getRuntimeConfig: (config: EventBridgeClientConfig) => {
  apiVersion: string;
  base64Decoder: import("@smithy/types").Decoder;
  base64Encoder: import("@smithy/types").Encoder;
  disableHostPrefix: boolean;
  endpointProvider: (
    endpointParams: import("./endpoint/EndpointParameters").EndpointParameters,
    context?: {
      logger?: import("@smithy/types").Logger | undefined;
    }
  ) => import("@smithy/types").EndpointV2;
  extensions: import("./runtimeExtensions").RuntimeExtension[];
  logger: import("@smithy/types").Logger;
  serviceId: string;
  signerConstructor:
    | (new (
        options: import("@smithy/signature-v4").SignatureV4Init &
          import("@smithy/signature-v4").SignatureV4CryptoInit
      ) => import("@smithy/types").RequestSigner)
    | typeof SignatureV4MultiRegion;
  urlParser: import("@smithy/types").UrlParser;
  utf8Decoder: import("@smithy/types").Decoder;
  utf8Encoder: import("@smithy/types").Encoder;
};

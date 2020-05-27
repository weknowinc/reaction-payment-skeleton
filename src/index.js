import pkg from "../package.json";
import i18n from "./i18n/index.js";
import schemas from "./schemas/index.js";
import reactionPaymentSkeletonCapturePayment from "./util/reactionPaymentSkeletonCapturePayment.js";
import reactionPaymentSkeletonCreateAuthorizedPayment from "./util/reactionPaymentSkeletonCreateAuthorizedPayment.js";
import reactionPaymentSkeletonCreateRefund from "./util/reactionPaymentSkeletonCreateRefund.js";
import reactionPaymentSkeletonListRefunds from "./util/reactionPaymentSkeletonListRefunds.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Reaction payment skeleton",
    name: "reaction-payment-skeleton",
    version: pkg.version,
    i18n,
    graphQL: {
      schemas
    },
    functionsByType: {
      startup: [startup]
    },
    paymentMethods: [{
      name: "reaction_payment_skeleton",
      canRefund: true,
      displayName: "Reaction Payment Skeleton",
      functions: {
        capturePayment: reactionPaymentSkeletonCapturePayment,
        createAuthorizedPayment: reactionPaymentSkeletonCreateAuthorizedPayment,
        createRefund: reactionPaymentSkeletonCreateRefund,
        listRefunds: reactionPaymentSkeletonListRefunds
      }
    }]
  });
}

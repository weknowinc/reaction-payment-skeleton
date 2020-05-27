/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function weknowPaymentSkeletonStartup(context) {
  context.collections.ReactionPaymentSkeletonRefunds = context.app.db.collection("ReactionPaymentSkeletonRefunds");
}

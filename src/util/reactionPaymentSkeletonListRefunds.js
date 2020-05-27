/**
 * @name reactionPaymentSkeletonListRefunds
 * @method
 * @summary List refunds
 * @param {Object} context an object containing the per-request state
 * @param {Object} payment object containing transaction ID
 * @returns {Object} refund result
 * @private
 */
export default async function reactionPaymentSkeletonListRefunds(context, payment) {
  const { transactionId } = payment;

  const refunds = await context.collections.ReactionPaymentSkeletonRefunds.find({
    transactionId
  }).toArray();

  return refunds.map((refund) => ({
    _id: refund._id,
    amount: refund.amount,
    created: refund.createdAt.getTime(),
    currency: refund.currencyCode,
    raw: {},
    reason: refund.reason,
    type: "refund"
  }));
}

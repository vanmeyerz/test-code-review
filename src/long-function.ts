// Violates: MAX_FUNCTION_LENGTH (>50 lines)
async function createOrderWithValidation(orderData) {
  const errors = [];

  if (!orderData.customerId) {
    errors.push('Customer ID required');
  }

  if (!orderData.items || orderData.items.length === 0) {
    errors.push('Order must have items');
  }

  if (orderData.items) {
    orderData.items.forEach((item, index) => {
      if (!item.productId) {
        errors.push(`Item ${index}: Product ID required`);
      }
      if (!item.quantity || item.quantity < 1) {
        errors.push(`Item ${index}: Invalid quantity`);
      }
      if (!item.price || item.price < 0) {
        errors.push(`Item ${index}: Invalid price`);
      }
    });
  }

  if (orderData.shippingAddress) {
    if (!orderData.shippingAddress.street) {
      errors.push('Shipping street required');
    }
    if (!orderData.shippingAddress.city) {
      errors.push('Shipping city required');
    }
    if (!orderData.shippingAddress.country) {
      errors.push('Shipping country required');
    }
    if (!orderData.shippingAddress.postalCode) {
      errors.push('Shipping postal code required');
    }
  }

  if (errors.length > 0) {
    throw new Error('Validation failed: ' + errors.join(', '));
  }

  let total = 0;
  orderData.items.forEach(item => {
    total += item.price * item.quantity;
  });

  if (orderData.discountCode) {
    const discount = await this.getDiscount(orderData.discountCode);
    if (discount && discount.isValid) {
      total -= discount.amount;
    }
  }

  const order = {
    customerId: orderData.customerId,
    items: orderData.items,
    total: total,
    status: 'pending',
    createdAt: new Date(),
  };

  return await this.saveOrder(order);
}

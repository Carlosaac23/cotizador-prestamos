export function formatMoney(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(value);
}

export function calculateTotalPay(quantity, term) {
  let total;

  if (quantity < 5000) {
    total = quantity * 1.5;
  } else if (quantity >= 5000 && quantity <= 10000) {
    total = quantity * 1.4;
  } else if (quantity >= 10000 && quantity <= 15000) {
    total = quantity * 1.3;
  } else if (quantity >= 15000 && quantity <= 20000) {
    total = quantity * 1.2;
  } else if (quantity >= 20000 && quantity <= 25000) {
    total = quantity * 1.1;
  } else if (quantity >= 25000 && quantity <= 30000) {
    total = quantity * 1;
  }

  if (term === 6) {
    total *= 1.1;
  } else if (term === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
}


export const delay = (length) => (() => (new Promise((resolve) => (setTimeout(resolve, length)))));

export const formatMoney = (amount) => (parseFloat(amount).toFixed(2));

export const delay = (length) => (() => (new Promise((resolve) => (setTimeout(resolve, length)))));

export const formatMoney = (amount) => (isNaN(parseFloat(amount)) ? '-' : parseFloat(amount).toFixed(2));
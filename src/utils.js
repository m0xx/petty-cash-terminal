
export const delay = (length) => (() => (new Promise((resolve) => (setTimeout(resolve, length)))));
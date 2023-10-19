export const convertCurrency = (amount?: number, decimal = 2) => {
  if (!amount) {
    return '0.00'
  }

  return amount
    .toFixed(decimal)
    ?.toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

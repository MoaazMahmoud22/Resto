// formatting.ts
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}) as Intl.NumberFormat;

export default currencyFormatter; // Export the constant

export const numberFormat = (value) =>
  new Intl.NumberFormat(['ban', 'id'], {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
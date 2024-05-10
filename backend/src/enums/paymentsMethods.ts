export enum paymentsMethods {
  // Money in the Mercado Pago account.
  'ACCOUNTMONEY' = 'account_money',
  // Boletos, Caixa Electronica Payment, PayCash, Efecty, Oxxo, etc.
  'TICKET' = 'ticket',
  // Pix and PSE (Pagos Seguros en Línea).
  'BANKTRANSFER' = 'bank_transfer',
  // ATM payment (widely used in Mexico through BBVA Bancomer).
  'ATM' = 'atm',
  // Payment by credit card.
  'CREDITCARD' = 'credit_card',
  // Payment by debit card.
  'DEBITCARD' = 'debit_card',
  // Payment by prepaid card.
  'PREPAIDCARD' = 'prepaid_card',
  // Purchases with Mercado Crédito.
  'DIGITALCURRENCY' = 'digital_currency',
  // Alelo benefits, Sodexo.
  'VOUCHERCARD' = 'voucher_card',
  // Payment with cryptocurrencies such as Ethereum and Bitcoin.
  'CRYPTOTRANSFER' = 'crypto_transfer',
}

export interface Payments {
  id: number;
  createdApproved: Date;
  paymentMethodID: string;
  paymentTypeID: string;
  status: string;
  statusDetail: string;
  externalReference: string;
  transactionAmount: number;
  qrCode: string;
  qrCodeBase64: string;
  ticketUrl: string;
}

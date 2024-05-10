export interface Payments {
  salesOrderID: string;
  createdApproved: string;
  paymentMethod: string;
  paymentType: string;
  status: string;
  statusDetail: string;
  externalReference: string;
  transactionAmount: number;
  qrCode: string;
  qrCodeBase64: string;
  ticketUrl: string;
  id?: number;
  orderID?: number;
}

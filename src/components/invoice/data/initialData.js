// import { ProductLine, Invoice } from './types'

export const initialProductLine = {
  code: '',
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice = {
  title: 'Invoice',
  companyName: 'David Kim Salon de Beaute',
  corporation: '2620189 Ontario Inc.',
  name: 'David J.Kim',
  companyAddress: '5171 Yonge St. Unit 2',
  companyAddress2: 'Aurora, Ontario L4G 1M1',
  companyCountry: 'Canada',
  phoneNumber: 'Phone: (905) 726-4184',
  billTo: 'Bill To:',
  customerNameLabel: 'Name: ',
  clientName: '',
  customerAddressLabel: 'Address: ',
  clientAddress: '',
  customerAddressLabel2: '',
  clientAddress2: '',
  customerPhoneLabel: 'Phone: ',
  phoneNumber2: '',
  clientCountry: 'Canada',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineCode: 'Code',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    // {
    //   description: 'Brochure Design',
    //   quantity: '2',
    //   rate: '100.00',
    // },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  initialSubTotal: '0.00',
  discountPercent: '0',
  discountLabel: 'Discount By (0%)',
  initialDiscount: '0.00',
  discountDollarLabel: 'Discount By $',
  initialDiscountDollar: '0.00',
  taxLabel: 'Sale Tax (13%)',
  initialTax: '0.00',
  totalLabel: 'TOTAL',
  initialTotal: '0.00',
  currency: '$',
  tipLabel: 'Tip',
  initialTip: '$  0.00',
  grandTotalLabel: 'GRAND TOTAL',
  initialGrandTotal: '0.00',
  cashLabel: 'Cash',
  initialCash: '$  0.00',
  creditCardLabel: 'Credit Card',
  initialCC: '$  0.00',
  debitCardLabel: 'Debit Card',
  initialDC: '$  0.00',
  ePaymentLabel: 'e payment',
  initialEP: '$  0.00',
  giftCardLabel: 'Gift Card',
  initialGC: '$  0.00',
  membershipCardLabel: 'Membership Card',
  initialMC: '$  0.00',
  notesLabel: 'Notes',
  notes: 'No refunds on Services or Products that we provide.',
  memoLabel: 'Memo:',
  initialMemo: '',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
  hstNumber: 'HST 77003 2514 RT0001'
}

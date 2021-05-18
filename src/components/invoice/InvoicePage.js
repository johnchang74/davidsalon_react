import React, { useState, useEffect } from 'react'
// import { Invoice, ProductLine } from './data/types'
import { initialInvoice, initialProductLine } from './data/initialData'
import EditableInput from './EditableInput'
//import EditableSelect from './EditableSelect'
import EditableTextarea from './EditableTextarea'
import EditableCalendarInput from './EditableCalendarInput'
// import countryList from './data/countryList'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import { Font } from '@react-pdf/renderer'
import Download from './DownloadPDF'
import format from 'date-fns/format'
// import './scss/main.scss'

Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf' },
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf', fontWeight: 600 },
  ],
})

// interface Props {
//   data?: Invoice
//   pdfMode?: boolean
// }

const InvoicePage = ({ data, pdfMode }) => {
  const [invoice, setInvoice] = useState(data ? { ...data } : { ...initialInvoice })
  const [subTotal, setSubTotal] = useState()
  const [discount, setDiscount] = useState()
  const [saleTax, setSaleTax] = useState()
  const [total, setTotal] = useState()
  const [tip, setTip] = useState()
  const [grandTotal, setGrandTotal] = useState()

  const dateFormat = 'MMM dd, yyyy'
  const invoiceDate = invoice.invoiceDate !== '' ? new Date(invoice.invoiceDate) : new Date()
  const invoiceDueDate =
    invoice.invoiceDueDate !== ''
      ? new Date(invoice.invoiceDueDate)
      : new Date(invoiceDate.valueOf())

  if (invoice.invoiceDueDate === '') {
    invoiceDueDate.setDate(invoiceDueDate.getDate() + 30)
  }

  const handleChange = (name, value) => {
    if (name !== 'productLines') {
        const newInvoice = { ...invoice }
        newInvoice[name] = value
        setInvoice(newInvoice)
        // console.log(name + '|' + value)
        if (name === 'initialTip' && value === 'undefined') {
          setTip(parseFloat(invoice.initialInvoice))
        } else if (name === 'initialTip' && value !== 'undefined') {
          let amt = value.replace('$', '').replace(' ', '')
          setTip(parseFloat(amt))
        }
    }
  }

  const handleProductLineChange = (index, name, value) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine }

        if (name === 'description') {
          newProductLine[name] = value
        } else {
          if (
            value[value.length - 1] === '.' ||
            (value[value.length - 1] === '0' && value.includes('.'))
          ) {
            newProductLine[name] = value
          } else {
            const n = parseFloat(value)

            newProductLine[name] = (n ? n : 0).toString()
          }
        }

        return newProductLine
      }

      return { ...productLine }
    })

    setInvoice({ ...invoice, productLines })
  }

  const handleRemove = (i) => {
    const productLines = invoice.productLines.filter((productLine, index) => index !== i)

    setInvoice({ ...invoice, productLines })
  }

  const handleAdd = () => {
    const productLines = [...invoice.productLines, { ...initialProductLine }]

    setInvoice({ ...invoice, productLines })
  }

  const calculateAmount = (quantity, rate) => {
    const quantityNumber = parseFloat(quantity)
    const rateNumber = parseFloat(rate)
    const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

    return amount.toFixed(2)
  }

  const rountToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
  }

  useEffect(() => {
    let subTotal = 0

    invoice.productLines.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.quantity)
      const rateNumber = parseFloat(productLine.rate)
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

      subTotal += amount
    })

    setSubTotal(subTotal)
  }, [invoice.productLines])

  useEffect(() => {
    const match = invoice.discountLabel.match(/(\d+)%/)
    const discountRate = match ? parseFloat(match[1]) : 0
    const discount = subTotal ? (subTotal * discountRate) / 100 : 0
    const decimalDiscount = rountToTwo(discount) 
    setDiscount(decimalDiscount)
  }, [subTotal, invoice.discountLabel])

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/)
    const taxRate = match ? parseFloat(match[1]) : 0
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0
    const decimalSaleTax = rountToTwo(saleTax) 
    // console.log(decimalSaleTax)
    setSaleTax(decimalSaleTax)
  }, [subTotal, invoice.taxLabel])

  useEffect(() => {
    const totalAmt = rountToTwo(subTotal + saleTax - discount)
    setTotal(totalAmt)
  }, [subTotal, saleTax, discount, invoice.totalLabel])

  useEffect(() => {
    const grandTotal = total && tip ? (total + tip) : total
    const decimalGrandTotal = rountToTwo(grandTotal)
    setGrandTotal(decimalGrandTotal)
  }, [total, tip, invoice.grandTotalLabel])

  return (
    <Document pdfMode={pdfMode}>
      <Page className="invoice-wrapper" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50" pdfMode={pdfMode}>
            <EditableInput
              className="fs-20 bold"
              placeholder="David Kim Salon de Beaute"
              value={invoice.companyName}
              onChange={(value) => handleChange('companyName', value)}
              pdfMode={pdfMode}
            />
            {/* <EditableInput
              placeholder="David J.Kim"
              value={invoice.name}
              onChange={(value) => handleChange('name', value)}
              pdfMode={pdfMode}
            /> */}
            <EditableInput
              placeholder="15171 Yonge St. Unit 2"
              value={invoice.companyAddress}
              onChange={(value) => handleChange('companyAddress', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Aurora, Ontario L4G 1M1"
              value={invoice.companyAddress2}
              onChange={(value) => handleChange('companyAddress2', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Canada"
              value={invoice.companyCountry}
              onChange={(value) => handleChange('companyCountry', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Phone: (905) 726-4184"
              // className="hst-number"
              value={invoice.phoneNumber}
              onChange={(value) => handleChange('phoneNumber', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-50" pdfMode={pdfMode}>
            <EditableInput
              className="fs-45 right bold"
              placeholder="Invoice"
              value={invoice.title}
              onChange={(value) => handleChange('title', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="2620189 Ontario Inc."
              className="hst-number"
              value={invoice.corporation}
              onChange={(value) => handleChange('corporation', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="HST 77003 2514 RT0001"
              className="hst-number"
              value={invoice.hstNumber}
              onChange={(value) => handleChange('companyAddress2', value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>

        <View className="flex customer-block" pdfMode={pdfMode}>
          <View className="w-50" pdfMode={pdfMode}>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-18" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Name:"
                  className="bold"
                  value={invoice.customerNameLabel}
                  onChange={(value) => handleChange('customerNameLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Type customer name"
                  value={invoice.clientName}
                  onChange={(value) => handleChange('clientName', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-18" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Customer Address:"
                  className="bold"
                  value={invoice.customerAddressLabel}
                  onChange={(value) => handleChange('customerAddressLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Type customer address"
                  value={invoice.clientAddress}
                  onChange={(value) => handleChange('clientAddress', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-18" pdfMode={pdfMode}>
                <EditableInput
                  placeholder=""
                  value={invoice.customerAddressLabel2}
                  onChange={(value) => handleChange('customerAddressLabel2', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Type customer address"
                  value={invoice.clientAddress2}
                  onChange={(value) => handleChange('clientAddress2', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-18" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Customer Phone:"
                  className="bold"
                  value={invoice.customerPhoneLabel}
                  onChange={(value) => handleChange('customerPhoneLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Type customer phone number"
                  value={invoice.phoneNumber2}
                  onChange={(value) => handleChange('phoneNumber2', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
          </View>
          <View className="w-50" pdfMode={pdfMode}>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.invoiceTitleLabel}
                  onChange={(value) => handleChange('invoiceTitleLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="Type invoice#"
                  value={invoice.invoiceTitle}
                  onChange={(value) => handleChange('invoiceTitle', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex i-mb-5" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.invoiceDateLabel}
                  onChange={(value) => handleChange('invoiceDateLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableCalendarInput
                  value={format(invoiceDate, dateFormat)}
                  selected={invoiceDate}
                  onChange={(date) =>
                    handleChange(
                      'invoiceDate',
                      date && !Array.isArray(date) ? format(date, dateFormat) : ''
                    )
                  }
                  pdfMode={pdfMode}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="i-mt-30 bg-dark flex" pdfMode={pdfMode}>
        <View className="w-18 i-p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.productLineCode}
              onChange={(value) => handleChange('productLineCode', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-48 i-p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.productLineDescription}
              onChange={(value) => handleChange('productLineDescription', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 i-p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantity}
              onChange={(value) => handleChange('productLineQuantity', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 i-p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityRate}
              onChange={(value) => handleChange('productLineQuantityRate', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-18 i-p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityAmount}
              onChange={(value) => handleChange('productLineQuantityAmount', value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>

        {invoice.productLines.map((productLine, i) => {
          return pdfMode && productLine.description === '' ? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="invoice-row flex" pdfMode={pdfMode}>
              <View className="w-18 i-p-4-8 i-pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item code"
                  value={productLine.code}
                  onChange={(value) => handleProductLineChange(i, 'code', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-48 i-p-4-8 i-pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) => handleProductLineChange(i, 'description', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 i-p-4-8 i-pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.quantity}
                  onChange={(value) => handleProductLineChange(i, 'quantity', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 i-p-4-8 i-pb-10" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.rate}
                  onChange={(value) => handleProductLineChange(i, 'rate', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-18 i-p-4-8 i-pb-10" pdfMode={pdfMode}>
                <Text className="dark right" pdfMode={pdfMode}>
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </Text>
              </View>
              {!pdfMode && (
                <button
                  className="link invoice-row__remove"
                  aria-label="Remove Row"
                  title="Remove Row"
                  onClick={() => handleRemove(i)}
                >
                  <span className="icon icon-remove bg-red"></span>
                </button>
              )}
            </View>
          )
        })}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50 i-mt-10" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Line Item
              </button>
            )}
          </View>
          <View className="w-50 i-mt-20" pdfMode={pdfMode}>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.subTotalLabel}
                  onChange={(value) => handleChange('subTotalLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {subTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.discountLabel}
                  onChange={(value) => handleChange('discountLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {discount?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.taxLabel}
                  onChange={(value) => handleChange('taxLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex bg-gray i-p-5" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.totalLabel}
                  onChange={(value) => handleChange('totalLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5 flex" pdfMode={pdfMode}>
                <EditableInput
                  className="dark bold right i-ml-30"
                  value={invoice.currency}
                  onChange={(value) => handleChange('currency', value)}
                  pdfMode={pdfMode}
                />
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {total?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.tipLabel}
                  onChange={(value) => handleChange('tipLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialTip}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialTip', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex bg-gray i-p-5" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.grandTotalLabel}
                  onChange={(value) => handleChange('grandTotalLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5 flex" pdfMode={pdfMode}>
                <EditableInput
                  className="dark bold right i-ml-30"
                  value={invoice.currency}
                  onChange={(value) => handleChange('currency', value)}
                  pdfMode={pdfMode}
                />
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {grandTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.cashLabel}
                  onChange={(value) => handleChange('cashLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialCash}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialCash', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.creditCardLabel}
                  onChange={(value) => handleChange('creditCardLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialCC}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialCC', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.debitCardLabel}
                  onChange={(value) => handleChange('debitCardLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialDC}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialDC', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.ePaymentLabel}
                  onChange={(value) => handleChange('ePaymentLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialEP}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialEP', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.giftCardLabel}
                  onChange={(value) => handleChange('giftCardLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialGC}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialGC', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.membershipCardLabel}
                  onChange={(value) => handleChange('membershipCardLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialMC}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialMC', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="i-mt-20" pdfMode={pdfMode}>
          <EditableInput
            className="bold w-100"
            value={invoice.notesLabel}
            onChange={(value) => handleChange('notesLabel', value)}
            pdfMode={pdfMode}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.notes}
            onChange={(value) => handleChange('notes', value)}
            pdfMode={pdfMode}
          />
        </View>
        {/* <View className="i-mt-20" pdfMode={pdfMode}>
          <EditableInput
            className="bold w-100"
            value={invoice.termLabel}
            onChange={(value) => handleChange('termLabel', value)}
            pdfMode={pdfMode}
          />
          <EditableTextarea
            className="w-100"
            rows={2}
            value={invoice.term}
            onChange={(value) => handleChange('term', value)}
            pdfMode={pdfMode}
          />
        </View> */}
      </Page>
    </Document>
  )
}
export default InvoicePage

import React, { useState, useEffect } from 'react'
import { initialInvoice, initialProductLine } from './data/initialData'
import EditableInput from './EditableInput'
import EditableTextarea from './EditableTextarea'
import InvoiceHeader from './InvoiceHeader'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import { Font } from '@react-pdf/renderer'
import Download from './DownloadPDF'

Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf' },
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf', fontWeight: 600 },
  ],
})

const InvoicePage = ({ data, pdfMode }) => {
  document.title="David Kim Salon de Beauté"
  const [invoice, setInvoice] = useState(data ? { ...data } : { ...initialInvoice })
  const [subTotal, setSubTotal] = useState()
  const [discount, setDiscount] = useState()
  const [saleTax, setSaleTax] = useState()
  const [total, setTotal] = useState()
  const [tip, setTip] = useState()
  const [grandTotal, setGrandTotal] = useState()

  const handleChange = (name, value) => {
    if (name !== 'productLines') {
        const newInvoice = { ...invoice }
        newInvoice[name] = value
        setInvoice(newInvoice)
    }
  }

  const handleTipChange = (name, value) => {
    const newTip = { ...invoice }
    newTip[name] = value
    let amt = roundToTwo(parseFloat(value.replace('$', '').replace(' ', '')))
    setTip(amt)
    let gAmt = total + amt
    newTip['initialGrandTotal'] = gAmt.toString()
    setInvoice(newTip)
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

  const roundToTwo = (num) => {
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
    const decimalDiscount = roundToTwo(discount) 
    setDiscount(decimalDiscount)
  }, [subTotal, invoice.discountLabel])

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/)
    const taxRate = match ? parseFloat(match[1]) : 0
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0
    const decimalSaleTax = roundToTwo(saleTax) 
    setSaleTax(decimalSaleTax)
  }, [subTotal, invoice.taxLabel])

  useEffect(() => {
    const totalAmt = roundToTwo(subTotal + saleTax - discount)
    setTotal(totalAmt)
  }, [subTotal, saleTax, discount, invoice.discountLabel, invoice.taxLabel])

  useEffect(() => {
    let tAmt = roundToTwo(parseFloat(invoice.initialTip.replace('$', '').replace(' ', '')))
    setTip(tAmt)
  }, [invoice.initialTip])

  useEffect(() => {
    let gAmt = roundToTwo(tip ? (tip + total) : total)
    setGrandTotal(gAmt)
  }, [total, tip])

  return (
    <Document pdfMode={pdfMode}>
      <Page className="invoice-wrapper" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}
        <InvoiceHeader data={invoice} pdfMode={pdfMode}>
        </InvoiceHeader>
        <View className="i-mt-30 bg-dark flex" pdfMode={pdfMode}>
          <View className="w-18 i-p-4-8" pdfMode={pdfMode}>
            <Text className="white bold" pdfMode={pdfMode}>
              {invoice.productLineCode}
            </Text>
          </View>
          <View className="w-48 i-p-4-8" pdfMode={pdfMode}>
            <Text className="white bold" pdfMode={pdfMode}>
              {invoice.productLineDescription}
            </Text>
          </View>
          <View className="w-17 i-p-4-8" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantity}
            </Text>
          </View>
          <View className="w-17 i-p-4-8" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantityRate}
            </Text>
          </View>
          <View className="w-18 i-p-4-8" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantityAmount}
            </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.subTotalLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.taxLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex bg-gray i-p-5" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="bold" pdfMode={pdfMode}>
                  {invoice.totalLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5 flex" pdfMode={pdfMode}>
                <Text className="dark bold right i-ml-30" pdfMode={pdfMode}>
                  {invoice.currency}
                </Text>
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {total?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text pdfMode={pdfMode}>
                  {invoice.tipLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialTip}
                  className="tip-amount"
                  onChange={(value) => handleTipChange('initialTip', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex bg-gray i-p-5" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="bold" pdfMode={pdfMode}>
                  {invoice.grandTotalLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5 flex" pdfMode={pdfMode} debug={true}>
                <Text className="dark bold right i-ml-30" pdfMode={pdfMode}>
                  {invoice.currency}
                </Text>
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {grandTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text pdfMode={pdfMode}>
                  {invoice.cashLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.creditCardLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.debitCardLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.ePaymentLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.giftCardLabel}
                </Text>
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
                <Text pdfMode={pdfMode}>
                  {invoice.membershipCardLabel}
                </Text>
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
          <Text className="bold w-100" pdfMode={pdfMode}>
            {invoice.notesLabel}
          </Text>
          <Text className="w-100" rows={2} pdfMode={pdfMode}>
            {invoice.notes}
          </Text>
        </View>
        {/* <button>
          {!pdfMode && <Download data={invoice} />}
        </button> */}
      </Page>
    </Document>
  )
}
export default InvoicePage

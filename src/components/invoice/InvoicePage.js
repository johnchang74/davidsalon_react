import React, { useState, useEffect } from 'react'
import { initialInvoice, initialProductLine } from './data/initialData'
import EditableInput from './EditableInput'
import EditableTextarea from './EditableTextarea'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import { Font } from '@react-pdf/renderer'
import Download from './DownloadPDF'
import EditableCalendarInput from './EditableCalendarInput'
import format from 'date-fns/format'
// import { Checkmark } from 'react-checkmark'

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
  // const [discountPercent, setDiscountPercent] = useState('0')
  const [saleTax, setSaleTax] = useState()
  const [preTotal, setPreTotal] = useState()
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

  // const handleDiscountChange = (name, value) => {
  //   const newDiscount = { ...invoice }
  //   newDiscount[name] = value
  //   let amt = roundToTwo(parseFloat(value))
  //   setDiscount(amt)
  //   setInvoice(newDiscount)
  // }

  const handleProductLineChange = (index, name, value) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine }

        if (name === 'description' || name === 'code') {
          newProductLine[name] = value
        } else if (name === '##amount##') {
          newProductLine[name] = (Number(value).toFixed(2)).toString()
          newProductLine['edit'] = true
        } else if (name === 'discountPercent') {
          let amt = parseFloat(newProductLine['rate']) * parseInt(newProductLine['quantity'])
          let dsAmt = ((amt * Number(value)) / 100).toFixed(2)
          let updatedAmt = (amt - dsAmt).toFixed(2).toString()
          // console.log(newProductLine['amount'])
          newProductLine['amount'] = updatedAmt
          // console.log(newProductLine['amount'])
          newProductLine[name] = value
          newProductLine['discountDollar'] = dsAmt.toString()
          newProductLine['edit'] = true
        } else if (name === 'discountDollar') {
          let amt = parseFloat(newProductLine['rate']) * parseInt(newProductLine['quantity'])
          let dsPer = ((Number(value) / amt) * 100).toFixed(2)
          let updatedAmt = (amt - Number(value)).toFixed(2).toString()
          // console.log(newProductLine['amount'])
          newProductLine['amount'] = updatedAmt
          // console.log(newProductLine['amount'])
          newProductLine[name] = value
          newProductLine['discountPercent'] = dsPer.toString()
          newProductLine['edit'] = true
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
    // setEditMode({status: false})
    setInvoice({ ...invoice, productLines })
  }

  // const handleFreeAdd = () => {
  //   const productLines = [...invoice.productLines, { ...initialProductLine, free: true }]
  //   setEditMode({status: false})
  //   setInvoice({ ...invoice, productLines })
  // }

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
  }

  const resetInvoice = () => {
    const clearInvoice = { ...initialInvoice }
    // setEditMode({status: false})
    setInvoice(clearInvoice)
  }

  // const onEditToggle = (index) => {
  //   const productLines = invoice.productLines.map((productLine, i) => {
  //     if (i === index) {
  //       productLine['edit'] = !productLine.edit
  //       if(productLine.color === '') {
  //         productLine['color'] = 'red'
  //       } else {
  //         productLine['color'] = ''
  //         productLine['editCount'] = (parseInt(productLine.editCount) + 1).toString()
  //       }
  //       if(productLine['title'] === 'Edit Amount') {
  //         productLine['title'] = 'Save Amount'
  //       } else {
  //         productLine['title'] = 'Edit Amount'
  //       }
  //     }
  //     return { ...productLine }
  //   })
  //   setInvoice({ ...invoice, productLines })
  // }

  const calculateAmount = (quantity, rate, index) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const quantityNumber = parseFloat(quantity)
        const rateNumber = parseFloat(rate)
        const amountNormal = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0
        // console.log(productLine.edit)
        if(!productLine.edit && parseInt(productLine.editCount) === 0) {
          productLine['amount'] = Number(amountNormal).toFixed(2)
        }
      }
      return { ...productLine }
    })
    // console.log(Number(productLines[index].amount).toFixed(2))
    // return Number(productLines[index].amount).toFixed(2)
    // setInvoice({ ...invoice, productLines })
    return productLines[index]['amount']
  }

  useEffect(() => {
    let subTotal = 0

    invoice.productLines.forEach((productLine) => {
      let amountValue = parseFloat(productLine.amount)
      const quantityNumber = parseFloat(productLine.quantity)
      const rateNumber = parseFloat(productLine.rate)
      let normalAmount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0
      if(!productLine.status && amountValue === normalAmount) {
        amountValue = normalAmount
      }
      subTotal += amountValue
    })

    setSubTotal(subTotal)
  }, [invoice.productLines])

  // useEffect(() => {
  //   const match = invoice.discountLabel.match(/(\d+)%/)
  //   const discountRate = match ? parseFloat(match[1]) : 0
  //   const discountAmt = subTotal && discountRate ? (subTotal * discountRate) / 100 : 0
  //   const decimalDiscount = roundToTwo(discountAmt)
  //   setDiscount(decimalDiscount)
  //   // console.log(discount)
  // }, [subTotal, invoice.discountLabel, discount])

  useEffect(() => {
    let discountTotal = 0

    invoice.productLines.forEach((productLine) => {
      discountTotal += parseFloat(productLine.discountDollar)
    })
    setDiscount(discountTotal)
  }, [invoice.productLines])

  // useEffect(() => {
  //   if (invoice.initialDiscountDollar !== '0.00') {
  //     const discountDollar = parseFloat(invoice.initialDiscountDollar)
  //     setDiscount(discountDollar)
  //     const percent = subTotal && discount ? (discount / subTotal) * 100 : 0
  //     let discountPercentLabel = 'Discount By (' + percent.toFixed(0) + '%)'
  //     setDiscountPercent(discountPercentLabel)
  //   }
  // }, [invoice.initialDiscountDollar, subTotal, discount])

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/)
    const taxRate = match ? parseFloat(match[1]) : 0
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0
    const decimalSaleTax = roundToTwo(saleTax) 
    setSaleTax(decimalSaleTax)
  }, [subTotal, invoice.taxLabel])

  useEffect(() => {
    const preTotalAmt = roundToTwo(subTotal)
    const totalAmt = roundToTwo(subTotal + saleTax)
    setPreTotal(preTotalAmt)
    setTotal(totalAmt)
    setGrandTotal(totalAmt)
  }, [subTotal, saleTax])

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
      <Page className="invoice-wrapper dark" pdfMode={pdfMode}>
        {/* {!pdfMode && <Download data={invoice} />} */}
        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50 dark" pdfMode={pdfMode}>
              <Text className="fs-15 bold" pdfMode={pdfMode}>
                  {invoice.companyName}
              </Text>
              <Text pdfMode={pdfMode}>
                  {invoice.companyAddress}
              </Text>
              <Text pdfMode={pdfMode}>
                  {invoice.companyAddress2}
              </Text>
              <Text pdfMode={pdfMode}>
                  {invoice.companyCountry}
              </Text>
              <Text pdfMode={pdfMode}>
                  {invoice.phoneNumber}
              </Text>
          </View>
          <View className="w-50" pdfMode={pdfMode}>
              <Text className="fs-30 right bold" pdfMode={pdfMode}>
                  {invoice.title}
              </Text>
              <Text className="hst-number" pdfMode={pdfMode}>
                  {invoice.corporation}
              </Text>
              <Text className="hst-number" pdfMode={pdfMode}>
                  {invoice.hstNumber}
              </Text>
              <Text className="hst-number" pdfMode={pdfMode}>
                  {invoice.companyWebsite}
              </Text>
          </View>
        </View>
        <View className="flex customer-block" pdfMode={pdfMode}>
            <View className="w-65" pdfMode={pdfMode}>
                <View className="flex i-mb-5" pdfMode={pdfMode}>
                    <View className="w-18" pdfMode={pdfMode}>
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.customerNameLabel}
                        </Text>
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
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.customerAddressLabel}
                        </Text>
                    </View>
                    <View className="w-80" pdfMode={pdfMode}>
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
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.customerEmailLabel}
                        </Text>
                    </View>
                    <View className="w-60" pdfMode={pdfMode}>
                        <EditableInput
                        placeholder="Type customer email"
                        value={invoice.customerEmail}
                        onChange={(value) => handleChange('customerEmail', value)}
                        pdfMode={pdfMode}
                        />
                    </View>
                </View>
                <View className="flex i-mb-5" pdfMode={pdfMode}>
                    <View className="w-18" pdfMode={pdfMode}>
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.customerPhoneLabel}
                        </Text>
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
            <View className="w-35" pdfMode={pdfMode}>
                <View className="flex i-mb-5" pdfMode={pdfMode}>
                    <View className="w-40" pdfMode={pdfMode}>
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.invoiceTitleLabel}
                        </Text>
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
                        <Text className="bold" pdfMode={pdfMode}>
                            {invoice.invoiceDateLabel}
                        </Text>
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
        <View className="i-mt-10 bg-dark flex" pdfMode={pdfMode}>
          <View className="w-20 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold" pdfMode={pdfMode}>
              {invoice.productLineCode}
            </Text>
          </View>
          <View className="w-48 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold" pdfMode={pdfMode}>
              {invoice.productLineDescription}
            </Text>
          </View>
          <View className="w-10 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantity}
            </Text>
          </View>
          <View className="w-12 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantityRate}
            </Text>
          </View>
          <View className="w-18 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineQuantityAmount}
            </Text>
          </View>
          <View className="w-10 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineDiscountPercentLabel}
            </Text>
          </View>
          <View className="w-10 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineDiscountDollarsLabel}
            </Text>
          </View>
          {/* <View className="w-10 i-p-4-4" pdfMode={pdfMode}>
            <Text className="white bold right" pdfMode={pdfMode}>
              {invoice.productLineAmountEditLabel}
            </Text>
          </View> */}
        </View>

        {invoice.productLines.map((productLine, i) => {
          return pdfMode && productLine.description === '' ? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="invoice-row dark flex" pdfMode={pdfMode}>
              <View className="w-20 i-p-4-4 i-pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item code"
                  value={productLine.code}
                  onChange={(value) => handleProductLineChange(i, 'code', value)}
                  // onChange={(value) => memoHandleProductLineChange(i, 'code', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-48 i-p-4-4 i-pb-10" pdfMode={pdfMode}>
                <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) => handleProductLineChange(i, 'description', value)}
                  // onChange={(value) => memoHandleProductLineChange(i, 'description', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-10 i-p-4-4 i-pb-10" pdfMode={pdfMode}>
                {
                  productLine.edit
                  ?
                  <Text className="span dark right" pdfMode={pdfMode}>
                    {productLine.quantity}
                  </Text>
                  :
                  <EditableInput
                    className="dark right"
                    value={productLine.quantity}
                    onChange={(value) => handleProductLineChange(i, 'quantity', value)}
                    // onChange={(value) => memoHandleProductLineChange(i, 'quantity', value)}
                    pdfMode={pdfMode}
                  />  
                }
              </View>
              <View className="w-12 i-p-4-4 i-pb-10" pdfMode={pdfMode}>
                {
                  productLine.edit
                  ?
                  <Text className="span dark right" pdfMode={pdfMode}>
                    {productLine.rate}
                  </Text>
                  :
                  <EditableInput
                    className="dark right"
                    value={productLine.rate}
                    onChange={(value) => handleProductLineChange(i, 'rate', value)}
                    // onChange={(value) => memoHandleProductLineChange(i, 'rate', value)}
                    pdfMode={pdfMode}
                  />  
                }
              </View>
              <View className="w-18 i-p-4-4 i-pb-10" pdfMode={pdfMode}>
                <Text className="dark right" pdfMode={pdfMode}>
                  {
                    productLine.edit
                    ?
                    productLine.amount
                    :
                    calculateAmount(productLine.quantity, productLine.rate, i)
                  }
                  {/* {!pdfMode && !productLine.edit
                  ?  
                    calculateAmount(productLine.quantity, productLine.rate, i)
                  : 
                    <EditableInput
                      className="dark right"
                      value={productLine.amount}
                      onChange={(value) => handleProductLineChange(i, 'amount', value)}
                      pdfMode={pdfMode}
                    />
                  } */}
                </Text>
              </View>
              <View className="w-10 i-p-4-4 i-pb-10 center" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.discountPercent}
                  onChange={(value) => handleProductLineChange(i, 'discountPercent', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-10 i-p-4-4 i-pb-10 center" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.discountDollar}
                  onChange={(value) => handleProductLineChange(i, 'discountDollar', value)}
                  pdfMode={pdfMode}
                />
              </View>
              {/* <View className="w-7 i-p-4-4 i-pb-10 center" pdfMode={pdfMode}>
                <div
                  onClick={() => updateAmount(i)}
                  title={productLine.title}
                >
                  <Checkmark size='medium' color={productLine.color} />
                </div>
              </View> */}
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

        <View className="flex dark" pdfMode={pdfMode}>
          <View className="w-50 i-mt-10" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Charged Item
              </button>
            )}
            {/* {!pdfMode && (
              <button className="link" onClick={handleFreeAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Free Item
              </button>
            )} */}
            <View className="i-mt-20 dark" pdfMode={pdfMode}>
              <Text className="bold w-100" rows={2} pdfMode={pdfMode}>
                {invoice.memoLabel}
              </Text>
              <EditableTextarea
                className="dark"
                placeholder="Enter your memo"
                value={invoice.initialMemo}
                onChange={(value) => handleChange('initialMemo', value)}
                pdfMode={pdfMode}
              />
              <Text className="bold w-100" pdfMode={pdfMode}>
                {invoice.notesLabel + ': ' + invoice.notes}
              </Text>
            </View>

            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text pdfMode={pdfMode}>
                  {invoice.cashLabel}
                </Text>
              </View>
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
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
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
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
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
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
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
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
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
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
              <View className="w-30 i-p-5" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.initialMC}
                  className="tip-amount"
                  onChange={(value) => handleChange('initialMC', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>

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
                <Text pdfMode={pdfMode}>
                  {invoice.discountDollarLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {discount?.toFixed(2)}
                </Text>
                {/* <EditableInput
                  value={invoice.initialDiscountDollar}
                  className="tip-amount"
                  onChange={(value) => handleDiscountChange('initialDiscountDollar', value)}
                  pdfMode={pdfMode}
                /> */}
              </View>
            </View>

            {/* { invoice.initialDiscountDollar !== '0.00' ?
              (<View className="flex" pdfMode={pdfMode}>
                <View className="w-50 i-p-5" pdfMode={pdfMode}>
                  <Text className="bold" pdfMode={pdfMode}>
                    {discountPercent}
                  </Text>
                </View>
                <View className="w-50 i-p-5" pdfMode={pdfMode}>
                  <Text className="right bold dark" pdfMode={pdfMode}>
                    {discount?.toFixed(2)}
                  </Text>
                </View>
              </View>) :
              (<View className="flex" pdfMode={pdfMode}>
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
              </View>)
            } */}
            
            <View className="flex bg-gray i-p-5" pdfMode={pdfMode}>
              <View className="w-50 i-p-5" pdfMode={pdfMode}>
                <Text className="bold" pdfMode={pdfMode}>
                  {invoice.afterTaxLabel}
                </Text>
              </View>
              <View className="w-50 i-p-5 flex" pdfMode={pdfMode}>
                <Text className="dark bold right i-ml-30" pdfMode={pdfMode}>
                  {invoice.currency}
                </Text>
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {preTotal?.toFixed(2)}
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
          </View>
        </View>
        {!pdfMode && <Download data={invoice} />}
        <a href="/invoice" className="invoice-reset-button" onClick={resetInvoice} title="Reset invoice" alt=""> 
        </a>
      </Page>
    </Document>
  )
}
export default InvoicePage

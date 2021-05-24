import React, { useState } from 'react'
import EditableInput from './EditableInput'
import EditableCalendarInput from './EditableCalendarInput'
import format from 'date-fns/format'
import { initialHeader } from './data/invoiceHeaderData'
import Text from './Text'
import View from './View'


const InvoiceHeader = ({data, pdfMode}) => {
    const [invoice, setInvoice] = useState(data ? { ...data } : { ...initialHeader })
    // console.log(invoice + '|' + pdfMode)
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
        const newInvoice = { ...invoice }
        newInvoice[name] = value
        setInvoice(newInvoice)
      }

    return (
        <div>
            <View className="flex" pdfMode={pdfMode}>
                <View className="w-50" pdfMode={pdfMode}>
                    <Text className="fs-20 bold" pdfMode={pdfMode}>
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
                    <Text className="fs-45 right bold" pdfMode={pdfMode}>
                        {invoice.title}
                    </Text>
                    <Text className="hst-number" pdfMode={pdfMode}>
                        {invoice.corporation}
                    </Text>
                    <Text className="hst-number" pdfMode={pdfMode}>
                        {invoice.hstNumber}
                    </Text>
                </View>
            </View>
            <View className="flex customer-block" pdfMode={pdfMode}>
                <View className="w-50" pdfMode={pdfMode}>
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
                            <Text pdfMode={pdfMode}>
                                {invoice.customerAddressLabel2}
                            </Text>
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
                <View className="w-50" pdfMode={pdfMode}>
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
        </div>
    )
} 
export default InvoiceHeader
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoicePage from './InvoicePage'
// import InvoiceHeader from './InvoiceHeader'

const Download = ({ data }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)

    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [data])

  return (
    <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Save PDF">
      {show && (
        <PDFDownloadLink
          document={
            <InvoicePage pdfMode={true} data={data}>
              {/* <InvoiceHeader pdfMode={true} data={data} /> */}
            </InvoicePage>
          }
          fileName={`${data.clientName ? data.clientName.toLowerCase() + '-invoice' : 'invoice'}.pdf`}
          aria-label="Save PDF"
        ></PDFDownloadLink>
      )}
    </div>
  )
}

export default Download

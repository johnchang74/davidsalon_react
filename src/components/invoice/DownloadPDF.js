import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoicePage from './InvoicePage'

const Download = ({ data }) => {
  const [show, setShow] = useState(false)

  const getCurrentTimeStamp = () => {
    var date = new Date()
    var year = date.getFullYear().toString()
    var month = (date.getMonth() + 1).toString()
    var day = date.getDate().toString()
    var hour = date.getHours().toString()
    var minute = date.getMinutes().toString()
    var sec = date.getSeconds().toString()

    if (day.length === 1) {
      day = '0' + day
    }
    if (month.length === 1) {
      month = '0' + month
    }
    if (hour.length === 1) {
      hour = '0' + hour
    }
    if (minute.length === 1) {
      minute = '0' + minute
    }  
    if (sec.length === 1) {
      sec = '0' + sec
    } 
    return year + '-' + month + '-' + day + '-' + hour + minute + sec;
  }

  useEffect(() => {
    setShow(false)

    const timeout = setTimeout(() => {
      setShow(true)
    }, 4500)

    return () => clearTimeout(timeout)
  }, [data])

  return (
    <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Save PDF">
      {show && (
        <PDFDownloadLink
          document={
            <InvoicePage pdfMode={true} data={data} />
          }
          fileName={`${data.clientName ? data.clientName.toLowerCase() + '-invoice-' + getCurrentTimeStamp() : 'invoice'}.pdf`}
          aria-label="Save PDF"
        ></PDFDownloadLink>
      )}
    </div>
  )
}

export default Download

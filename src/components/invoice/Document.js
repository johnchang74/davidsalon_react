import React from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'

// Props {
//   pdfMode?: boolean
// }

const Document = ({ pdfMode, children }) => {
  return <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>
}

export default Document;
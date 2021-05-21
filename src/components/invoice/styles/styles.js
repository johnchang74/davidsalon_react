// import { CSSClasses } from '../data/types'

const colorDark = '#222'
const colorDark2 = '#666'
const colorGray = '#e3e3e3'
const colorWhite = '#fff'

const styles = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  'bg-dark': {
    backgroundColor: colorDark2,
  },

  'bg-gray': {
    backgroundColor: colorGray,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  'w-auto': {
    flex: 1,
    paddingRight: '8px',
  },

  'i-ml-30': {
    flex: 1,
  },

  'w-100': {
    width: '100%',
  },

  'w-50': {
    width: '50%',
  },

  'w-55': {
    width: '55%',
  },

  'w-45': {
    width: '45%',
  },

  'w-60': {
    width: '60%',
  },

  'w-40': {
    width: '40%',
  },

  'w-48': {
    width: '48%',
  },

  'w-17': {
    width: '17%',
  },

  'w-18': {
    width: '18%',
  },

  row: {
    borderBottom: `1px solid ${colorGray}`,
  },

  'i-mt-40': {
    marginTop: '40px',
  },

  'i-mt-30': {
    marginTop: '30px',
  },

  'i-mt-20': {
    marginTop: '20px',
  },

  'i-mt-10': {
    marginTop: '10px',
  },

  'i-mb-5': {
    marginBottom: '5px',
  },

  'i-p-4-8': {
    padding: '4px 8px',
  },

  'i-p-5': {
    padding: '5px',
  },

  'i-pb-10': {
    paddingBottom: '10px',
  },

  right: {
    textAlign: 'right',
  },

  bold: {
    fontWeight: 'bold',
  },

  'fs-20': {
    fontSize: '20px',
  },

  'fs-45': {
    fontSize: '45px',
  },

  page: {
    fontFamily: 'Nunito',
    fontSize: '8px',
    color: '#555',
    padding: '40px 35px',
  },

  span: {
    padding: '4px 12px 4px 0',
  }
}

export default styles

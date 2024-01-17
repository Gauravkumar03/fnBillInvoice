import { useState } from 'react'
import { nanoid } from 'nanoid'

const Invoice = () => {
  const [logo, setLogo] = useState(null)
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [clientCity, setClientCity] = useState('')
  const [clientCountry, setClientCountry] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [date, setDate] = useState('')
  const [dueDate, setdueDate] = useState('')
  const [invoiceTitle, setInvoiceTitle] = useState('')
  const [data, setData] = useState([])

  const [sum, setSum] = useState(0)

  const [subTotal, setSubTotal] = useState(0);
  const [saleTax, setSaleTax] = useState(15);



  const rowStyle = {
    height: '85px',

    display: 'flex',
    alignItems: 'center',
  };


  const inputStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  };


  const total = subTotal + saleTax;
  const [addFormData, setAddFormData] = useState({
    desc: '',
    qty: '',
    rate: '',
    amount: '',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    

    const newData = {
      id: nanoid(),
      desc: addFormData.desc,
      qty: addFormData.qty,
      rate: addFormData.rate,
      amount: +addFormData.qty * +addFormData.rate,
    }
    const newDataArr = [...data, newData]
    document.getElementById('desc').value = ''
    document.getElementById('qty').value = ''
    document.getElementById('rate').value = ''
    document.getElementById('amount').value = ''
    setSum(sum + newData.amount)
    setSubTotal(sum)
    setData(newDataArr)
  }

  console.log(subTotal)


  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='main app-root'>
      <img
        src='/print.svg'
        alt='printer'
        width={40}
        className='print no-print'
        onClick={handlePrint}
      />
      <div className='container print-container'>
        <div className='header'>
          <div className='header-info'>
            <input
              style={{ display: 'none' }}
              id='logo-upload'
              type='file'
              accept='image/*'
              onChange={(e) => {
                setLogo(URL.createObjectURL(e.target.files[0]))
              }}
            />
            {!logo && (
              <label htmlFor='logo-upload' className='custom-file-upload'>
                Upload Logo
              </label>
            )}
            {logo && <img src={logo} alt='Logo' width={80} />}

            <input
              type='text'
              className='company-name'
              placeholder='Your Company'
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder="Company's Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />
            <input
              type='text'
              placeholder='City, State Zip'
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
            <div className='select-wrapper'>
              <select
                value={state}
                onChange={(e) => {
                  setState(e.target.value)
                }}
              >
                <option value=''>Select a state</option>
                <option value='Andhra Pradesh'>Andhra Pradesh</option>
                <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                <option value='Assam'>Assam</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type='text'
              className='heading'
              placeholder='INVOICE'
              value={invoiceTitle}
              onChange={(e) => {
                setInvoiceTitle(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='header-two'>
          <div>
            <h4>Bill to :</h4>
            <div className='header-info'>
              <input
                type='text'
                placeholder="Your Client's Name"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder="Client's Address"
                value={clientAddress}
                onChange={(e) => {
                  setClientAddress(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder='City, State Zip'
                value={clientCity}
                onChange={(e) => {
                  setClientCity(e.target.value)
                }}
              />
              <div className='select-wrapper'>
                <select
                  value={clientCountry}
                  onChange={(e) => {
                    setClientCountry(e.target.value)
                  }}
                >
                  <option value=''>Select a Country</option>
                  <option value='United States'>United States</option>
                  <option value='India'>India</option>
                  <option value='Russia'>Russia</option>
                </select>
              </div>
            </div>
          </div>
          <div className='header-info-two'>
            <div className='sub-header'>
              <div className='sub-heading'>Invoice#</div>
              <input
                type='text'
                className='sub-content'
                placeholder='INV-12'
                value={invoiceNumber}
                onChange={(e) => {
                  setInvoiceNumber(e.target.value)
                }}
              />
            </div>
            <div className='sub-header'>
              <div className='sub-heading'>Invoice Date</div>
              <div className='sub-content-date'>
                <input
                  type='date'
                  className='date-picker'
                  placeholder='2024-01-17'
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className='sub-header'>
              <div className='sub-heading'>Due Date</div>
              <div className='sub-content-date'>
                <input
                  type='date'
                  className='date-picker'
                  placeholder='2024-01-17'
                  value={dueDate}
                  onChange={(e) => {
                    setdueDate(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container-two'>
          <table className='table-container'>
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.desc}</td>
                    <td>{item.qty}</td>
                    <td>{item.rate}</td>
                    <td>{item.amount}</td>
                  </tr>
                )
              })}
              <tr>
                <td>
                  <input
                    type='text'
                    name='desc'
                    onChange={handleAddFormChange}
                    id='desc'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    name='qty'
                    onChange={handleAddFormChange}
                    id='qty'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    name='rate'
                    onChange={handleAddFormChange}
                    id='rate'
                  />
                </td>
                <td>
                  <input
                    type='text'
                    name='amount'
                    onChange={handleAddFormChange}
                    id='amount'
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className='btn' onClick={handleAddFormSubmit}>
              <h5 className='plus'>+</h5>
              <h5 className='plus-text'>Add Line Item</h5>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '800px' }}>
            {/* First Column */}
            <div style={{ width: '600px', paddingBottom: '19px', textAlign: 'right', marginRight: 0, paddingRight: 0 }}>
              <div style={{ ...rowStyle, borderBottom: 'none', fontSize: '30px' }}>Sub Total</div>
              <div style={{ ...rowStyle, fontSize: '30px' }}>Sale Tax (15%)</div>
              <div style={{ ...rowStyle, borderBottom: 'none', fontSize: '30px', backgroundColor: 'lightgray' }}>Total</div>
            </div>

            {/* Second Column */}
            <div style={{ width: '600px', paddingBottom: '20px', textAlign: 'right' }}>
              <div style={rowStyle}>
                {/* <input
                  type="text"
                  value={subTotal}
                  onChange={(e) => setSubTotal(parseFloat(e.target.value) || 0)}
                  style={{ ...inputStyle, textAlign: 'right', fontSize: '30px', }}
                /> */}
                <h1>{subTotal}</h1>
              </div>
              <div style={rowStyle}>
                <input
                  type="text"
                  value={saleTax}
                  onChange={(e) => setSaleTax(parseFloat(e.target.value) || 0)}
                  style={{ ...inputStyle, textAlign: 'right', fontSize: '30px', }}
                />
              </div>
              <div style={{ ...rowStyle, backgroundColor: 'lightgray', justifyContent: 'flex-end', fontSize: '30px' }}>
                $&nbsp;&nbsp;&nbsp;{total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Invoice

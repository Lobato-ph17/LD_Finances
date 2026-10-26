import './Saldo.css'

function Saldo({total}) {
  return (
    <div className='saldo-card'>
        <p>O saldo total é de: <span className='saldo-valor'>R${total}</span></p>
    </div>
  )
}

export default Saldo

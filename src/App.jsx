import {useState} from 'react'


const App = () => {
  const [desc, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('depósito')

  const [transacoes, setTransacoes] = useState([
  { valor: 150, tipo: 'depósito', desc: 'Freela', id: 1 },
  { valor: 250, tipo: 'pagamento', desc: 'celular', id: 2 },
  { valor: 2000, tipo: 'depósito', desc: 'salário', id: 3 },
  { valor: 150, tipo: 'pagamento', desc: 'internet', id: 4 }
])
  
  let total = 0;

  for(let t of transacoes) {
    if(t.tipo === 'depósito'){
      total += t.valor;
    }else {
      total -= t.valor;
    }
  }

  const adicionar = () => {
    if(valor && desc){
      setTransacoes([...transacoes, {valor: Number(valor), tipo: tipo, desc: desc, id: Date.now()}])
      setDesc('')
      setValor('')
      setTipo('depósito')
    }else {
      alert('É necessário preencher o campo valor e descrição')
    }
  }


  return (
    <div>      
      <h1>ola</h1>
        <label htmlFor="">Descrição - </label>
        <input placeholder='Descreva o produto' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <br />
        <label htmlFor="">Valor - </label>
        <input placeholder='Valor do produto' value={valor} onChange={(e) => setValor(e.target.value)} />
      <ul>
        {transacoes.map((t  ) => (
          <li key={t.id}>{t.desc} {t.tipo === 'depósito' ? '+' : '-'} R${t.valor} </li>
        ))}
      </ul>
      <p>O saldo total é: R${total}</p>

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="depósito">depósito</option>
        <option value="pagamento">pagamento</option>
      </select>

      <button onClick={adicionar} >Adicionar Nova</button>

    </div>
  )
}

export default App

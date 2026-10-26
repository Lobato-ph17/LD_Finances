import {useState} from 'react'
import Saldo from './components/saldo/Saldo'
import ListaTransacoes from './components/lista/ListaTransacoes'
import FormTransacao from './components/form/FormTransacao'
import './App.css'


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

  const excluir = (id) => {
    const newTransacoes = transacoes.filter((t) => t.id !== id);
    setTransacoes(newTransacoes);
  }

  return (
    <div className='container'>      
      <h1>Welcome to LD Finances</h1>
      <ListaTransacoes  transacoes={transacoes} excluir={excluir}/>
      <Saldo total={total}/>
      <FormTransacao 
        desc={desc}
        valor={valor}
        tipo={tipo}
        adicionar={adicionar}
        setDesc={setDesc}
        setTipo={setTipo}
        setValor={setValor}
      />
      
    </div>
  )
}

export default App


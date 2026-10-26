import './ListaTransacoes.css'

function ListaTransacoes({transacoes, excluir}) {
  return (
    <div>
      <ul className='lista'>
        {transacoes.map((t) => (
          <li className={t.tipo === 'depósito' ? 'lista-item deposito' : 'lista-item pagamento'} key={t.id}>{t.desc} {t.tipo === 'depósito' ? '+' : '-'} R${t.valor} <button onClick={() => excluir(t.id)}>Excluir</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTransacoes


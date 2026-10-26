import './ListaTransacao.css'

function ListaTransacoes({transacoes, excluir}) {
  return (
    <div>
      <ul className='lista'>
        {transacoes.map((t) => (
          <li className='lista-item' key={t.id}>{t.desc} {t.tipo === 'depósito' ? '+' : '-'} R${t.valor} <button onClick={() => excluir(t.id)}>Excluir</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTransacoes


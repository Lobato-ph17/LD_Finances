
function ListaTransacoes({transacoes, excluir}) {
  return (
    <div>
      <ul>
        {transacoes.map((t) => (
          <li key={t.id}>{t.desc} {t.tipo === 'depósito' ? '+' : '-'} R${t.valor} <button onClick={() => excluir(t.id)}>Excluir</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTransacoes


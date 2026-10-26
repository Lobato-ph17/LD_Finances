
function FormTransacao({desc, valor, tipo, adicionar, setDesc, setTipo, setValor}) {
  return (
    <div>
      <label htmlFor="">Descrição - </label>
        <input placeholder='Descreva o produto' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <br />
      <label htmlFor="">Valor - </label>
        <input placeholder='Valor do produto' value={valor} onChange={(e) => setValor(e.target.value)} />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="depósito">depósito</option>
            <option value="pagamento">pagamento</option>
        </select>

      <button onClick={adicionar} >Adicionar Nova</button>

    </div>
  )
}

export default FormTransacao

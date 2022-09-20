import React, { useState } from "react";

const Tabela = (props) => {
  const [order, setOrder] = useState(0);
  const ordenaNome = (e) => {
    if (order === 0) {
      setOrder(1);
    } else if (order === 1) {
      setOrder(-1);
    } else if (order === -1) {
      setOrder(1);
    }
  };
  const listaDeEntradasTrabalhada = props.listaDeEntradas.sort((a, b) => {
    return a.nome.toLowerCase() < b.nome.toLowerCase() ? -order : order;
  });

  const deletarLinha = (index) => {
    const lista = [...props.listaDeEntradas];
    lista.splice(index, 1);
    props.setListaDeEntradas(lista);
  };

  // mesma funcionalidade porem usando o metodo slice
  // const deletarLinha = (index) => {
  //   const lista = props.listaDeEntradas
  //     .slice(0, index)
  //     .concat(props.listaDeEntradas.slice(index + 1));
  //   props.setListaDeEntradas(lista);
  // };

  return (
    <div className="tabela">
      <table id="t_tabela">
        <thead>
          <tr>
            <th
              className="celula"
              onClick={() => ordenaNome()}
              style={{ backgroundColor: "lightgray" }}
            >
              Nome
            </th>
            <th className="celula" style={{ backgroundColor: "lightgray" }}>
              Idade
            </th>
            <th className="celula" style={{ backgroundColor: "lightgray" }}>
              Data
            </th>
            <th className="celula" style={{ backgroundColor: "lightgray" }}>
              Remover
            </th>
          </tr>
        </thead>
        <tbody id="t_body">
          {listaDeEntradasTrabalhada.map((item, index) => {
            return (
              <tr key={index} id={index}>
                <td
                  className="celula"
                  style={
                    item.nome.toLowerCase().includes(props.nomeFiltrado)
                      ? { backgroundColor: "yellow" }
                      : {}
                  }
                >
                  {item.nome}
                </td>
                <td className="celula">{item.idade}</td>
                <td className="celula">{item.data}</td>
                <td className="celula">
                  <button
                    className="btExcluir"
                    onClick={() => deletarLinha(index)}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Tabela;

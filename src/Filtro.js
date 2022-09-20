import React, { useState } from "react";
import "./styles.css";

const Filtro = (props) => {
  const estadoInicial = "";
  const [nomeNoFiltro, setNomeNoFiltro] = useState(estadoInicial);

  const handleChange = (e) => {
    setNomeNoFiltro(e.target.value);
  };

  const [filtroAtivo, setFiltroAtivo] = useState(false);

  const filtrarNome = () => {
    props.setNomeFiltrado(nomeNoFiltro.toLowerCase());
    setFiltroAtivo(true);
  };

  const resetarFiltro = () => {
    setFiltroAtivo(false);
    setNomeNoFiltro("");
    props.setNomeFiltrado("");
  };

  return (
    <div style={{ display: "block" }}>
      <div style={{ display: "inline-block" }}>
        <div className="contador">
          {props.listaDeEntradas.length > 0 && (
            <p id="p_registros">
              Quantidade de Registros atuais: {props.listaDeEntradas.length}
            </p>
          )}
        </div>

        <div style={{ display: "inline-block" }}>
          <label for="f_filtro">Filtrar por Nome: </label>
          <input
            type="text"
            id="f_filtro"
            value={nomeNoFiltro}
            onChange={(e) => handleChange(e)}
            style={
              nomeNoFiltro !== "" && filtroAtivo === true
                ? { backgroundColor: "yellow" }
                : {}
            }
          />
          <input
            id="s_botao"
            type="submit"
            value="Procurar"
            onClick={() => filtrarNome()}
          />

          <input
            type="button"
            onClick={() => resetarFiltro()}
            value="Limpar filtro"
          />
        </div>
      </div>
    </div>
  );
};

export default Filtro;

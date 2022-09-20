import React, { useState } from "react";

const Formulario18 = (props) => {
  const estadoInicial18 = {
    nome: "",
    idade: 18,
    data: "",
    quantidade: ""
  };

  const [form18, setForm18] = useState(estadoInicial18);
  const handleForm18Change = (e) => {
    if (e.target.getAttribute("name") === "f_nome18") {
      setForm18({
        nome: e.target.value,
        idade: form18.idade,
        data: form18.data,
        quantidade: form18.quantidade
      });
    } else if (e.target.getAttribute("name") === "f_dataAdm18") {
      setForm18({
        nome: form18.nome,
        idade: form18.idade,
        data: e.target.value,
        quantidade: form18.quantidade
      });
    } else if (e.target.getAttribute("name") === "f_quantidade18") {
      setForm18({
        nome: form18.nome,
        idade: form18.idade,
        data: form18.data,
        quantidade: e.target.value
      });
    }
  };

  const adicionar18 = () => {
    if (form18.nome !== "" && form18.data !== "") {
      for (let i = 1; i <= form18.quantidade; i++) {
        props.setListaDeEntradas((atual) => [
          ...atual,
          {
            nome: form18.nome,
            idade: form18.idade,
            data: form18.data
          }
        ]);
      }
      setForm18(estadoInicial18);
    }
  };

  return (
    <div className={props.classe2} id="f_root18">
      {/* Input Nome. */}
      <form name="f_test18">
        <div className="label">
          <label>Nome:</label>
          <br />
          <input
            type="text"
            name="f_nome18"
            id="f_inome18"
            value={form18.nome}
            onChange={(e) => handleForm18Change(e)}
          />
        </div>

        {/* Input idade (Oculto e padronizado). */}
        <div style={{ display: "none" }}>
          <input
            type="number"
            name="f_idade18"
            id="f_iidade18"
            value="18"
            readOnly={true}
          />
        </div>

        {/* Input data de Admissão */}
        <div className="label">
          <label>Data de Admissão:</label>
          <br />
          <input
            type="date"
            name="f_dataAdm18"
            id="f_idata18"
            value={form18.data}
            onChange={(e) => handleForm18Change(e)}
          />
        </div>

        {/* Input Quantidade */}
        <div className="label">
          <label>Quantidade:</label>
          <br />
          <input
            type="number"
            name="f_quantidade18"
            id="f_iquantidade18"
            value={form18.quantidade}
            onChange={(e) => handleForm18Change(e)}
          />
        </div>
      </form>
      {/* Botão para adicionar as informações. */}
      <div className="label">
        <input type="submit" value="Adicionar" onClick={() => adicionar18()} />
      </div>
    </div>
  );
};
export default Formulario18;

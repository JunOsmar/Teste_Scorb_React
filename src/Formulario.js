import React, { useState } from "react";

const Formulario = (props) => {
  const estadoInicial = {
    nome: "",
    idade: "",
    data: "",
    quantidade: ""
  };

  const [form, setForm] = useState(estadoInicial);
  const handleFormChange = (e) => {
    if (e.target.getAttribute("name") === "f_nome") {
      setForm({
        nome: e.target.value,
        idade: form.idade,
        data: form.data,
        quantidade: form.quantidade
      });
    } else if (e.target.getAttribute("name") === "f_idade") {
      setForm({
        nome: form.nome,
        idade: e.target.value,
        data: form.data,
        quantidade: form.quantidade
      });
    } else if (e.target.getAttribute("name") === "f_dataAdm") {
      setForm({
        nome: form.nome,
        idade: form.idade,
        data: e.target.value,
        quantidade: form.quantidade
      });
    } else if (e.target.getAttribute("name") === "f_quantidade") {
      setForm({
        nome: form.nome,
        idade: form.idade,
        data: form.data,
        quantidade: e.target.value
      });
    }
  };

  const adicionar = () => {
    if (form.nome !== "" && form.idade !== "" && form.data !== "") {
      for (let i = 1; i <= form.quantidade; i++) {
        props.setListaDeEntradas((atual) => [
          ...atual,
          {
            nome: form.nome,
            idade: form.idade,
            data: form.data
          }
        ]);
      }
      setForm(estadoInicial);
    }
  };

  return (
    // Input Nome.
    <div className={props.classe1} id="f_root">
      <form name="f_test">
        <div className="label">
          <label>Nome:</label>
          <br />
          <input
            type="text"
            name="f_nome"
            id="f_inome"
            value={form.nome}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        {/* Input idade */}
        <div className="label">
          <label>Idade:</label>
          <br />
          <input
            type="number"
            name="f_idade"
            id="f_iidade"
            value={form.idade}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        {/* Input data de Admissão. */}
        <div className="label">
          <label>Data de Admissão:</label>
          <br />
          <input
            type="date"
            name="f_dataAdm"
            id="f_idata"
            value={form.data}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        {/* Input Quantidade */}
        <div className="label">
          <label>Quantidade:</label>
          <br />
          <input
            type="number"
            name="f_quantidade"
            id="f_iquantidade"
            value={form.quantidade}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
      </form>

      {/* Botão para adicionar as informações. */}
      <div className="label">
        <input type="submit" value="Adicionar" onClick={() => adicionar()} />
      </div>
    </div>
  );
};
export default Formulario;

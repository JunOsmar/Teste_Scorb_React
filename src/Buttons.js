import React from "react";
import "./styles.css";

const buttons = (props) => {
  // Funcionalidades do botão de Formulário.
  let valorBotao;
  const mostrarOcultar = () => {
    if (props.classe1 === "esconder") {
      props.setClasse1("mostrar");
    } else if (props.classe1 === "mostrar") {
      props.setClasse1("esconder");
    }
  };
  if (props.classe1 === "esconder") {
    valorBotao = "Mostrar Formulario";
  } else if (props.classe1 === "mostrar") {
    valorBotao = "Ocultar Formulário";
  }

  // Funcionalidades do botão de Formulário 18 anos.
  let valorBotao18;
  const mostrarOcultar18 = () => {
    if (props.classe2 === "esconder") {
      props.setClasse2("mostrar");
    } else if (props.classe2 === "mostrar") {
      props.setClasse2("esconder");
    }
  };
  if (props.classe2 === "esconder") {
    valorBotao18 = "Mostrar Formulario 18 anos";
  } else if (props.classe2 === "mostrar") {
    valorBotao18 = "Ocultar Formulário 18 anos";
  }

  const jsonPrint = () => {
    console.log(JSON.stringify(props.listaDeEntradas, null, 2));
  };

  return (
    <div style={{ display: "block" }}>
      {/* Botao do Formulário */}
      <div className="botao">
        <input
          type="button"
          id="b_form"
          onClick={() => {
            mostrarOcultar();
          }}
          value={valorBotao}
        ></input>
      </div>

      {/* Botão do Formulário de 18 anos */}
      <div className="botao18">
        <input
          type="button"
          id="b_form18"
          onClick={() => {
            mostrarOcultar18();
          }}
          value={valorBotao18}
        ></input>
      </div>

      {/* Botão printa JSON */}
      <div className="jsonBt">
        <input
          type="button"
          value="Printa JSON"
          onClick={() => jsonPrint()}
        ></input>
      </div>
    </div>
  );
};

export default buttons;

import React, { useState } from "react";
import "./styles.css";
import Buttons from "./Buttons";
import Filtro from "./Filtro";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Formulario18 from "./Formulario18";

export default function App() {
  const [classe1, setClasse1] = useState("esconder");
  const [classe2, setClasse2] = useState("esconder");

  const [listaDeEntradas, setListaDeEntradas] = useState([]);

  const [nomeFiltrado, setNomeFiltrado] = useState();

  return (
    <div className="root">
      <Buttons
        classe1={classe1}
        setClasse1={setClasse1}
        classe2={classe2}
        setClasse2={setClasse2}
        listaDeEntradas={listaDeEntradas}
      />
      <Formulario
        classe1={classe1}
        listaDeEntradas={listaDeEntradas}
        setListaDeEntradas={setListaDeEntradas}
      />
      <Formulario18
        classe2={classe2}
        listaDeEntradas={listaDeEntradas}
        setListaDeEntradas={setListaDeEntradas}
      />
      <Filtro
        listaDeEntradas={listaDeEntradas}
        nomeFiltrado={nomeFiltrado}
        setNomeFiltrado={setNomeFiltrado}
      />
      <Tabela
        listaDeEntradas={listaDeEntradas}
        setListaDeEntradas={setListaDeEntradas}
        nomeFiltrado={nomeFiltrado}
        setNomeFiltrado={setNomeFiltrado}
      />
    </div>
  );
}

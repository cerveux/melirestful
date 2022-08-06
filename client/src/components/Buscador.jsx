import React, { useState } from "react";
import Results from "./Results";
import { useParams } from "react-router-dom";


function Buscador({ data, search }) {
  const { result } = useParams();
  ((data === null)) && search(result);

  return (
    ((data !== null)) ?
      (<main className="app-container">
        <section className="search-results">
          <ol className="search-layout">
            {data &&
              data.map((articulo) => {
                return (
                  <Results key={articulo.id} articulo={articulo} />
                );
              })}
          </ol>
        </section>
      </main>) : (<div className="loader-container">
        <div className="spinner"></div>
      </div>)
  )
}

export default Buscador;
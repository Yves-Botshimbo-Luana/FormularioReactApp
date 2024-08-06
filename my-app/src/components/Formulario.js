import React, { useState } from 'react';

function Formulario() {
  const [formState, setFormState] = useState({
    nome: '',
    pais: '',
    estado: '',
    cidade: ''
  });

  const estadosPorPais = {
    Brasil: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'],
    EUA: ['California', 'Florida', 'New York']
  };

  const cidadesPorEstado = {
    'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Ouro Preto'],
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    'New York': ['New York City', 'Buffalo', 'Albany']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Aluno:</label>
        <input
          type="text"
          name="nome"
          value={formState.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>País do Aluno:</label>
        <select name="pais" value={formState.pais} onChange={handleChange}>
          <option value="">Selecione o País</option>
          <option value="Brasil">Brasil</option>
          <option value="EUA">EUA</option>
        </select>
      </div>

      <div>
        <label>Estado:</label>
        <select
          name="estado"
          value={formState.estado}
          onChange={handleChange}
          disabled={!formState.pais}
        >
          <option value="">Selecione o Estado</option>
          {formState.pais &&
            estadosPorPais[formState.pais].map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Cidade:</label>
        <select
          name="cidade"
          value={formState.cidade}
          onChange={handleChange}
          disabled={!formState.estado}
        >
          <option value="">Selecione a Cidade</option>
          {formState.estado &&
            cidadesPorEstado[formState.estado].map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
        </select>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
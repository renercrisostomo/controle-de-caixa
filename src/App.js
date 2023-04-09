import './App.css';
import { useState, useEffect } from 'react';
import { Form, Graph, Tabela } from './shared/components';
import theme from './shared/theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {

  const [tableData, setTableData] = useState([])
  const [graphData, setgraphData] = useState({ receita: 0, despesa: 0 })

  useEffect(() => {
    let receitasTotal = 0;
    let despesasTotal = 0;

    tableData.forEach((item) => { 
      item.type === "Receita" ? receitasTotal += parseFloat(item.value) : despesasTotal += parseFloat(item.value) 
    });

    setgraphData({ receita: receitasTotal, despesa: despesasTotal });
  }, [tableData]);

  function onAddItem(newItem) {

    const { id, value, date, observation, type } = newItem;

    fetch('/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, value, date, observation, type})
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => console.error(error));

      fetch('/items')
      .then(response => response.json())
      .then(items => setTableData(items))
      .catch(error => console.error(error))
  }

  function handleDelete(id) {

    fetch(`/items/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => console.error(error))

      fetch('/items')
      .then(response => response.json())
      .then(items => setTableData(items))
      .catch(error => console.error(error))
  }

  return (
    <div id='app'>
      <ThemeProvider theme={theme}>
        <h1>CONTROLE DE CAIXA</h1>
        <div id='sections'>
          <Form onAddItem={onAddItem} />
          <Graph graphData={graphData} />
          <Tabela tableData={tableData} handleDelete={handleDelete} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

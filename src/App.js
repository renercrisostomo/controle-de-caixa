import './App.css';
import { useState, useEffect } from 'react';
import { Form, Graph, Tabela } from './shared/components';
import theme from './shared/theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {

  const [tableData, setTableData] = useState([])
  const [graphData, setgraphData] = useState({receita: 0, despesa: 0})

  useEffect(() => {
    let receitasTotal = 0;
    let despesasTotal = 0;

    tableData.forEach((item) => {
      if (item.type === "Receita") {
        receitasTotal += parseFloat(item.value);
      } else if (item.type === "Despesa") {
        despesasTotal += parseFloat(item.value);
      }
    });

    setgraphData({receita: receitasTotal, despesa: despesasTotal});
  }, [tableData]);


  function onAddItem(newItem) {
    const newTableData = [...tableData, newItem]
    setTableData(newTableData)
  }

  function handleDelete(id) {
    const newTableData = tableData.filter((item) => item.id !== id)
    setTableData(newTableData)
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

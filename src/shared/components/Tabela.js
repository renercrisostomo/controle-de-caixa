import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Tabela = ({ tableData, handleDelete }) => {

  const corReceita = '#5932EA'; // roxo
  const corDespesa = '#EA3232'; // vermelho
  const styleCell = { fontFamily: 'Poppins', color: 'black', padding: '0px' };
  const styleHeaderCell = { ...styleCell, border: 'none' };
  const styleBodyCell = { ...styleCell, fontWeight: '600', height: '32px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' };

  return (
    <div className='section' id='table' style={{ width: '1116px', height: '159px' }}>
      <TableContainer style={{ width: '1031px', height: '119px', overflowX: 'hidden', overflowY: tableData.length > 3 ? 'scroll' : 'hidden' }} >
        <Table style={{ width: '1031px', height: '119px' }} stickyHeader>
          <TableHead style={{ height: '21px' }}>
            <TableRow>
              <TableCell style={{ width: '117px', fontWeight: '500', ...styleHeaderCell }}> Valor</TableCell>
              <TableCell style={{ width: '137px', fontWeight: '500', ...styleHeaderCell }}> Data</TableCell>
              <TableCell style={{ width: '482px', fontWeight: '500', ...styleHeaderCell }}> Observação</TableCell>
              <TableCell style={{ width: '245px', fontWeight: '600', ...styleHeaderCell }}> Tipo de movimentação</TableCell>
              <TableCell style={{ width: '68px', fontWeight: '600', ...styleHeaderCell }}> Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ width: '1031px', height: '96px' }}>
            {tableData.map((row) => (
              <TableRow key={row.value} style={{ height: '32px', borderBottom: '1px solid #DADADA' }}>
                <TableCell style={{ width: '117px', ...styleBodyCell }}>
                  {`R$: ${parseFloat(row.value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                </TableCell>
                <TableCell style={{ ...styleBodyCell }}>
                  {row.date}
                </TableCell>
                <TableCell style={{ width: '482px', ...styleBodyCell }}>
                  {(row.observation === '') ? '...' : row.observation}
                </TableCell>
                <TableCell style={{ ...styleBodyCell, color: row.type === 'Receita' ? corReceita : corDespesa }}>
                  {row.type}
                </TableCell>
                <TableCell style={{ ...styleBodyCell }}>
                  <IconButton style={{ color: 'black', padding: '0px' }} aria-label="delete" onClick={() => handleDelete(row.id)}>
                    <DeleteIcon color='black' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tabela
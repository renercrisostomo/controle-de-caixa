import React, { useState } from 'react'
import { Grid, FormControl, FormLabel, TextField, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { Add, CheckCircle } from '@mui/icons-material'
import '../../App.css'


const Form = ({ onAddItem }) => {

    const [id, setId] = useState(0)
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [observation, setObservation] = useState('')
    const [type, setType] = useState('Receita')

    const handleSubmit = (event) => {
        event.preventDefault()

        // formata a data e adiciona no objeto
        const data = new Date(date);
        const dataFormatada = data.toLocaleDateString("pt-BR");

        const newItem = {
            id,
            value,
            date: dataFormatada,
            observation,
            type
        }
        onAddItem(newItem)

        setId(id + 1)
        setValue('')
        setDate('')
        setObservation('')
        // setType('Receita') - não resetarei o tipo de movimentação
    }

    return (

        <form id='form' className='section' onSubmit={handleSubmit}>

            <h2>Movimentações</h2>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing='16px'
                size='223px'
                marginTop='25px'
            >
                <Grid item xs='70px' spacing='10px' container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item xs={6}>
                        <FormControl required>
                            <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }} htmlFor="value">Valor</FormLabel>
                            <TextField type="number" inputProps={{ min: 0 }} id="value" name="value" placeholder="Digite o Valor" size="small" value={value} required onChange={(e) => setValue(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl required>
                            <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }} htmlFor="date">Data</FormLabel>
                            <TextField required type="date" id="date" name="date" placeholder="Selecione a Data" size="small" value={date} onChange={(e) => setDate(e.target.value)} />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs='70px'>
                    <FormControl id="observation">
                        <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }} htmlFor="observation">Observação <span>(opcional)</span></FormLabel>
                        <TextField fullWidth type="text" id="observation" name="observation" placeholder="Digite a Observação" size="small" value={observation} onChange={(e) => setObservation(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item xs='51px' spacing='10px' container direction="row" justifyContent="space-between">
                    <Grid item xs={6}>
                        <FormControl required>
                            <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }}>Tipo de movimentação</FormLabel>
                            <RadioGroup style={{ width: '196px', height: '18px' }} defaultValue="Receita" name="radio-buttons-group" row value={type} onChange={(e) => setType(e.target.value)}>
                                <FormControlLabel style={{width: '88px', height: '18px'}} value="Receita" label="Receita" size='small' control={<Radio size='small' checkedIcon={<CheckCircle />} />} />
                                <FormControlLabel style={{width: '88px', height: '18px'}} value="Despesa" label="Despesa" size='small' control={<Radio size='small' checkedIcon={<CheckCircle />} />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Button style={{ margin: '7px 0px 0px 42px' }} variant="contained" size='small' type="submit" startIcon={<Add size='24px' />}>
                            ADICIONAR
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );

}

export default Form

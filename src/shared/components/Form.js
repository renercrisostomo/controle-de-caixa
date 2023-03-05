import React, { useState } from 'react'
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { Add, CheckCircle } from '@mui/icons-material'
import '../../App.css'
import InputForm from './InputForm'


const Form = ({ onAddItem }) => {

    const [values, setValues] = useState({ value: '', date: '', observation: '', type: 'Receita' });
    const [id, setId] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newValues = { ...values };

        // formata a data e adiciona no objeto
        const data = new Date(newValues.date);
        newValues.date = data.toLocaleDateString("pt-BR");

        const newItem = { id: id, ...newValues };
        onAddItem(newItem);

        setId(id + 1);
        setValues({ value: '', date: '', observation: '', type: values.type });
    };

    const onChange = (e) => {
        const newValues = { ...values };
        const { name, value } = e.target;
        newValues[name] = value;
        setValues(newValues);
    };


    return (

        <form id='form' className='section' onSubmit={handleSubmit}>

            <h2>Movimentações</h2>

            <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing='16px' size='223px' marginTop='25px'>
                <Grid item xs={70} spacing='10px' container direction="row" justifyContent="space-between" alignItems="center">
                    <InputForm xs={6} isRequired type="number" id="value" name="value" label="Valor" htmlFor="value" placeholder="Digite o Valor" size="small" value={values.value} onChange={onChange} />
                    <InputForm xs={6} isRequired type="date" id="date" name="date" label="Data" htmlFor="date" placeholder="Selecione a Data" size="small" value={values.date} onChange={onChange} />
                </Grid>

                <InputForm xs={70} type="text" id="observation" name="observation" label={`Observação (opcional)`} htmlFor="observation" placeholder="Digite a Observação" size="small" value={values.observation} onChange={onChange} isFullWidth />

                <Grid item xs={51} spacing='10px' container direction="row" justifyContent="space-between">
                    <Grid item xs={6}>
                        <FormControl required>
                            <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }}>Tipo de movimentação</FormLabel>
                            <RadioGroup style={{ width: '196px', height: '18px' }} defaultValue="Receita" name="type" row value={values.type} onChange={onChange}>
                                <FormControlLabel style={{ width: '88px', height: '18px' }} value="Receita" label="Receita" size='small' control={<Radio size='small' checkedIcon={<CheckCircle />} />} />
                                <FormControlLabel style={{ width: '88px', height: '18px' }} value="Despesa" label="Despesa" size='small' control={<Radio size='small' checkedIcon={<CheckCircle />} />} />
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

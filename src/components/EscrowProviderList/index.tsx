import React, { FC, useState } from 'react';
//import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, responsiveFontSizes, Typography } from "@material-ui/core";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles(() => {
    
})

export interface EscrowProps {}

export interface CheckBoxProps {
    checked?: boolean;
}

const MyCheckBox: FC<CheckBoxProps> = ({checked}) => (
    <input type="checkbox" />
)

const EscrowProviderList: FC<EscrowProps> = ({}) => {
    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [event.target.name]: event.target.checked});
    }

    return (
        <Card>
            <CardContent>
                <Typography>Accepted Escrow Providers</Typography>
                <FormGroup >
                    <FormHelperText>Please choose one</FormHelperText>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA"  color="primary" />}
                        label="Escrow Agent A"
                    />
                    <Rating name="half-raing" defaultValue={2.5} precision={0.5} size="small"/>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="Escrow Agent B"
                    />
                    <Rating name="half-raing" defaultValue={2.5} precision={0.5} size="small"/>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="Escrow Agent C"
                        
                    />
                    <Rating name="half-raing" defaultValue={2.5} precision={0.5} size="small"/>
                </FormGroup>
            </CardContent>
        </Card> 
    )
}

export default EscrowProviderList;


/*
<CheckBox checked={checked} onChange={handleCheckBoxChange}/>
<input type="checkbox" />
*/
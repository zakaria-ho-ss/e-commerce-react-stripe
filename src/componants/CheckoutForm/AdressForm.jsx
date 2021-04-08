import React, {useSate, useEffect} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import { commerce } from '../../lib/commerce'

import FormInput from './CustomTextField';



const AdressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
       const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

       setShippingCountries(countries);
       setShippingCountry(Object.keys(countries));
    }

    useEffect(()=> {
        fetchShippingCountries(checkoutToken.id)
    }, [])


    return (
        <>
            <Typography variant="h6" gutterBottom >Shippping Adress</Typography>
            <FormProvider {...methods}>
               <form onSubmit="" >
                 <Grid container spacing={3} >
                   <FormInput required name='firstName' label="First name" />
                   <FormInput required name='lastName' label="Last name" />
                   <FormInput required name='adress1' label="Adress" />
                   <FormInput required name='email' label="Email" />
                   <FormInput required name='city' label="City" />
                   <FormInput required name='zip' label="ZIP / Postal code" />
                    <Grid item xs={12} sm={6} >
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={} >
                           <MenuItem key={} value={} >
                               Select Me
                           </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={} fullWidth onChange={} >
                           <MenuItem key={} value={} >
                               Select Me
                           </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={} >
                           <MenuItem key={} value={} >
                               Select Me
                           </MenuItem>
                        </Select>
                    </Grid>
           </Grid>
               </form>
            </FormProvider>
        </>
    )
}

export default AdressForm

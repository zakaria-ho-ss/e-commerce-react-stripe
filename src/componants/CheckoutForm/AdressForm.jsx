import React, {useSate, useEffect, useState} from 'react'
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


    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));


    const fetchShippingCountries = async (checkoutTokenId) => {
       const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

       setShippingCountries(countries);
       setShippingCountry(Object.keys(countries));
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);

    }

    useEffect(()=> {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(()=> {
     if(shippingCountry)  fetchSubdivisions(shippingCountry);
     
    }, [shippingCountry]);



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
                        <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)} >
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id} >
                               {country.label}
                           </MenuItem>
                            ))}
                           
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)} >
                            {subdivisions.map((subdivision) => (
                                <MenuItem key={subdivision.id} value={subdivision.id} >
                               {subdivision.label}
                           </MenuItem>
                            ))}
                           
                        </Select>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} >
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={} >
                           <MenuItem key={} value={} >
                               Select Me
                           </MenuItem>
                        </Select>
                    </Grid> */}
           </Grid>
               </form>
            </FormProvider>
        </>
    )
}

export default AdressForm

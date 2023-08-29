import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['The Godfather', 'Pulp Fiction'];

export function TestAutocomplete() {
    return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
    );
}

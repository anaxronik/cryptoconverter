import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


export default function Right() {
    const onChange = () => {
        console.log('onChange')
    }

    return (
        <div>
            <div className='curencyBlock'>
                <TextField className='TextField' id="outlined-basic1" label="Отдам" variant="outlined" />

                <FormControl variant="outlined" className='FormControl'>
                    <InputLabel htmlFor="outlined-age-native-simple1">$</InputLabel>
                    <Select
                        native
                        value={[]}
                        onChange={onChange}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple1',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </div>

            <div className='curencyBlock'>
                <TextField className='TextField' id="outlined-basic2" label="Получу" variant="outlined" />
                <FormControl variant="outlined" className='FormControl'>
                    <InputLabel htmlFor="outlined-age-native-simple2">$</InputLabel>
                    <Select
                        native
                        value={[]}
                        onChange={onChange}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple2',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </div>

        </div >
    )
}

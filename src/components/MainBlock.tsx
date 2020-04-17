import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'


type typeCoins = {
    Name: string,
    FullName: string,
    ImageUrl: string,
    PRICE: number,
    VOLUME24HOUR: number
}


export default function MainBlock() {

    const [coins, setCoins] = React.useState<typeCoins[]>([])

    React.useEffect(() => {
        axios
            .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({ data }) => {
                setCoins(
                    data.Data.map(
                        (coin: any) => {
                            return {
                                Name: coin.CoinInfo.Name,
                                FullName: coin.CoinInfo.FullName,
                                ImageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                                PRICE: coin.RAW.USD.PRICE.toFixed(2),
                                VOLUME24HOUR: coin.RAW.USD.VOLUME24HOUR.toFixed(2),
                            }
                        }
                    )
                )
            })
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className='' aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">FullName</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Volume24h</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coins.map(
                        coin => (
                            <TableRow key={coin.Name}>
                                <TableCell align="left"><img className='coinAvatar' src={coin.ImageUrl} alt="" /></TableCell>
                                <TableCell align="left">{coin.Name}</TableCell>
                                <TableCell align="left">{coin.FullName}</TableCell>
                                <TableCell align="right">{coin.PRICE}</TableCell>
                                <TableCell align="right">{coin.VOLUME24HOUR}</TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
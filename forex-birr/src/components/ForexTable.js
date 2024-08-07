import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ForexTable = ({ data }) => {
  // Check if data is available and there is at least one bank with currencies
  if (!data || data.length === 0 || data[0].currencies.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bank</TableCell>
            {data[0].currencies.map((currency) => (
              <TableCell key={currency.name} colSpan={4}>
                {currency.name}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            {data[0].currencies.map((currency) => (
              <React.Fragment key={currency.name}>
                <TableCell>Cash Buy</TableCell>
                <TableCell>Cash Sell</TableCell>
                <TableCell>Transfer Buy</TableCell>
                <TableCell>Transfer Sell</TableCell>
              </React.Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((bank) => (
            <TableRow key={bank.name}>
              <TableCell>{bank.name}</TableCell>
              {bank.currencies.map((currency) => (
                <React.Fragment key={currency.name}>
                  <TableCell>{currency.cashBuyRate || 'N/A'}</TableCell>
                  <TableCell>{currency.cashSellRate || 'N/A'}</TableCell>
                  <TableCell>{currency.TansactionBuyRate || 'N/A'}</TableCell>
                  <TableCell>{currency.TansactionSellRate || 'N/A'}</TableCell>
                </React.Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ForexTable;

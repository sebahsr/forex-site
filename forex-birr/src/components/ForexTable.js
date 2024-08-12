import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ForexTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const cellStyle = {
    padding: '4px 8px',
    fontSize: '0.875rem',
  };

  return (
    <div>
      {data.map((bank) => (
        <div key={bank.name} style={{ marginBottom: '1.5rem' }}>
          <Typography variant="subtitle1" gutterBottom>
            {bank.name}
          </Typography>
          <TableContainer component={Paper} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell style={cellStyle}>Currency</TableCell>
                  <TableCell style={cellStyle}>Cash Buy</TableCell>
                  <TableCell style={cellStyle}>Cash Sell</TableCell>
                  <TableCell style={cellStyle}>Transfer Buy</TableCell>
                  <TableCell style={cellStyle}>Transfer Sell</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bank.currencies.map((currency) => (
                  <TableRow key={currency.name}>
                    <TableCell style={cellStyle}>{currency.name}</TableCell>
                    <TableCell style={cellStyle}>{currency.cashBuyRate || 'N/A'}</TableCell>
                    <TableCell style={cellStyle}>{currency.cashSellRate || 'N/A'}</TableCell>
                    <TableCell style={cellStyle}>{currency.TansactionBuyRate || 'N/A'}</TableCell>
                    <TableCell style={cellStyle}>{currency.TansactionSellRate || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default ForexTable;

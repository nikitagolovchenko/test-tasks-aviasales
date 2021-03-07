import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from '@material-ui/core';

interface Transfers {
  label: string;
  checked: boolean;
}

interface TransfersList {
  [key: string]: Transfers;
}

const Filter: React.FC = () => {
  const [transfers, setTransfers] = useState<TransfersList>({
    all: {
      label: 'Все',
      checked: true,
    },
    withoutTransfers: {
      label: 'Без пересадок',
      checked: false,
    },
    oneTransfers: {
      label: '1 пересадка',
      checked: false,
    },
    twoTransfers: {
      label: '2 пересадки',
      checked: false,
    },
    threeTransfers: {
      label: '3 пересадки',
      checked: false,
    },
  });

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTransfers(prev => ({ ...prev, [e.target.name]: {
      ...prev[e.target.name], checked: e.target.checked
    } }))
  };

  return (
    <Paper>
      <Box p={2}>
        <Typography variant='button'>Количество пересадок</Typography>
        {Object.keys(transfers).map((el, index) => {
          return (
            <Box key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={transfers[el].checked}
                    onChange={checkHandler}
                    name={el}
                    color='primary'
                  />
                }
                label={transfers[el].label}
              />
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default Filter;

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listItem: {
    paddingLeft: '0',
    paddingRight: '0',
    flex: '1 1 33.33333%',
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  secondaryText: {
    textTransform: 'uppercase',
  },
});

const Ticket: React.FC = () => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Card >
        <CardActionArea>
          <CardContent>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              mb={0}
            >
              <Typography variant='h5' color='primary'>
                13 400 Р{' '}
              </Typography>
              <img src='./logo.png' alt='image description' />
            </Box>
            <Box>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary='Single-line item'
                    secondary='Secondary text'
                    classes={{
                      root: classes.listItemText,
                      secondary: classes.secondaryText,
                    }}
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    className={classes.listItemText}
                    primary='Single-line item'
                    secondary='Secondary text'
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{
                      root: classes.listItemText,
                      secondary: classes.secondaryText,
                    }}
                    primary='Single-line item'
                    secondary='Secondary text'
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{
                      root: classes.listItemText,
                      secondary: classes.secondaryText,
                    }}
                    primary='Single-line item'
                    secondary='Secondary text'
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{
                      root: classes.listItemText,
                      secondary: classes.secondaryText,
                    }}
                    primary='Single-line item'
                    secondary='Secondary text'
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{
                      root: classes.listItemText,
                      secondary: classes.secondaryText,
                    }}
                    primary='Single-line item'
                    secondary='Secondary text'
                  />
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Ticket;

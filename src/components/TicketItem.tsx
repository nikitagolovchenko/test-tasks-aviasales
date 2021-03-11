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
  Theme,
} from '@material-ui/core';
import React from 'react';
import { Ticket } from '../store/types';
import { changePrice, getDate, getDuration, getStops } from '../utils/changeTicketData';

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '0',
    '&:last-child': {
      paddingTop: '0',
      paddingBottom: theme.spacing(1),
    }
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
}));

interface TicketProps {
  ticket: Ticket;
}

const TicketItem: React.FC<TicketProps> = ({ ticket }) => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              mb={0}
            >
              <Typography variant='h5' color='primary'>
                {changePrice(ticket.price)} {'P'}
              </Typography>
              <img
                src={`${process.env.REACT_APP_API_IMAGES}${ticket.carrier}.png`}
                alt={ticket.carrier}
              />
            </Box>
            <Box>
              {ticket.segments.map((el, index) => (
                <List className={classes.list} key={index}>
                  <ListItem className={classes.listItem}>
                    <ListItemText
                      primary={getDate(el.date)}
                      secondary={`${el.origin} - ${el.destination}`}
                      classes={{
                        root: classes.listItemText,
                        secondary: classes.secondaryText,
                      }}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText
                      primary={getDuration(el.duration)}
                      secondary='В пути'
                      classes={{
                        root: classes.listItemText,
                        secondary: classes.secondaryText,
                      }}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemText
                      primary={getDuration(el.duration)}
                      secondary={getStops(el.stops.length)}
                      classes={{
                        root: classes.listItemText,
                        secondary: classes.secondaryText,
                      }}
                    />
                  </ListItem>
                </List>
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default TicketItem;

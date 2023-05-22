import { Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFriendsThunk } from '../../../redux/slices/friendsSlice';
import emojis from '../../../utils/emojis';
import { getUserName } from '../../../utils/getUserName';
import BadgeAvatar from '../../ui/BadgeAvatar';

export default function FriendsPage(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const { friendsList = [], friendsOnline = [] } = useAppSelector((store) => store.friends);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFriendsThunk(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <Grid item xs={3}>
      <List>
        {friendsList.map((friend) => {
          const emojiKey = friend?.status || 'happy';
          const friendName = getUserName(friend.email);
          const isOnline = friendsOnline.map((el) => el.id).includes(friend.id);
          return (
            <ListItem key={friend.id}>
              <ListItemAvatar>
                <BadgeAvatar
                  alt={`${friendName}`}
                  src={`/images/${friendName}.jpeg`}
                  isOnline={isOnline}
                />
              </ListItemAvatar>
              <ListItemText primary={`${friend?.name || ''} ${emojis[emojiKey]}`} />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}

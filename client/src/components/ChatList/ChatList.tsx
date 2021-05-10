import cn from 'classnames';
import { FC } from 'react';

import styles from './ChatList.module.scss';
import { ChatListProps } from './ChatList.types';
import ChatListItem from './ChatListItem';

const ChatList: FC<ChatListProps> = (props) => {
  const { className } = props;

  return (
    <ul className={cn(styles.chatList, className)}>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </ul>
  );
};

export default ChatList;

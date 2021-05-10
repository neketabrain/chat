import { FC } from 'react';

import styles from './MessageList.module.scss';
import MyMessage from './MyMessage';
import UserMessage from './UserMessage';

const MessageList: FC = () => {
  return (
    <ul className={styles.messageList}>
      <MyMessage>Hi there</MyMessage>
      <UserMessage>Hello Nikita</UserMessage>
      <MyMessage>How are you?</MyMessage>
      <UserMessage>I'm fine, thx</UserMessage>
      <UserMessage>and whats about you?</UserMessage>
      <MyMessage>I'm fine too :)</MyMessage>
    </ul>
  );
};

export default MessageList;

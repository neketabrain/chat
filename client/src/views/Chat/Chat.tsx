import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowLeftIcon, SendIcon } from 'src/assets';
import { Card, Button, ProfilePreview, IconLinkButton, Input, MessageList } from 'src/components';
import { PATHS } from 'src/constants';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const { t } = useTranslation('chat');

  const [message, setMessage] = useState('');
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
  };

  useEffect(() => {
    const prevBgColor = window.getComputedStyle(document.body).backgroundColor;
    window.document.body.style.backgroundColor = '#f7f7f7';

    return () => {
      window.document.body.style.backgroundColor = prevBgColor;
    };
  }, []);

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <IconLinkButton to={PATHS.chats} className={styles.return}>
          <ArrowLeftIcon />
        </IconLinkButton>

        <ProfilePreview withStatus={true} link={`${PATHS.user}/1`} />
      </div>

      <div className={styles.chat}>
        <MessageList />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          className={styles.input}
          placeholder={t('enterMessage')}
          value={message}
          onChange={handleMessageChange}
        />
        <Button className={styles.sendButton} type="submit" disabled={!message.trim()}>
          <SendIcon />
        </Button>
      </form>
    </Card>
  );
};

export default Chat;

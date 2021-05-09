import cn from 'classnames';
import { useState, FC } from 'react';

import { ClosedEyeIcon, OpenedEyeIcon } from 'src/assets';
import { TextField } from 'src/components';

import styles from './TextInput.module.scss';
import { TextInputProps } from './TextInput.types';

const TextInput: FC<TextInputProps> = (props) => {
  const { label, className, type, forPassword, ...rest } = props;
  const [inputType, setInputType] = useState(forPassword ? 'password' : type);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <label className={cn(styles.textInput, className)}>
      <span>{label}</span>
      <div className={styles.input}>
        <TextField type={inputType} {...rest} />

        {forPassword && (
          <button className={styles.button} onClick={toggleInputType} type="button">
            {inputType === 'password' && <OpenedEyeIcon />}
            {inputType !== 'password' && <ClosedEyeIcon />}
          </button>
        )}
      </div>
    </label>
  );
};

export default TextInput;

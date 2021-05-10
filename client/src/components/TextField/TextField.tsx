import cn from 'classnames';
import { useState, FC } from 'react';

import { ClosedEyeIcon, OpenedEyeIcon } from 'src/assets';
import { Input } from 'src/components';

import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

const TextField: FC<TextFieldProps> = (props) => {
  const { label, className, type, forPassword, ...rest } = props;
  const [inputType, setInputType] = useState(forPassword ? 'password' : type);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <label className={cn(styles.textField, className)}>
      <span>{label}</span>
      <div className={styles.inputContainer}>
        <Input type={inputType} {...rest} />

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

export default TextField;

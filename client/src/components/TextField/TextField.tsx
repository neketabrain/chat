import cn from 'classnames';
import { useState, forwardRef } from 'react';

import { ClosedEyeIcon, OpenedEyeIcon } from 'src/assets';
import { Input } from 'src/components';

import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { label, className, type, forPassword, hasError, error, ...rest } = props;
  const [inputType, setInputType] = useState(forPassword ? 'password' : type);

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <label className={cn(styles.textField, className)}>
      <span>{label}</span>
      <div className={styles.inputContainer}>
        <Input type={inputType} ref={ref} hasError={!!error || hasError} {...rest} />

        {forPassword && (
          <button className={styles.button} onClick={toggleInputType} type="button">
            {inputType === 'password' && <OpenedEyeIcon />}
            {inputType !== 'password' && <ClosedEyeIcon />}
          </button>
        )}
      </div>
      {!!error && <p className={styles.error}>{error}</p>}
    </label>
  );
});

export default TextField;

import styles from './ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={'text-2xl bg-blue-500'}>
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;

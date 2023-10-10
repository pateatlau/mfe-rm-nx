import styles from './deposits-ui-components.module.css';
import { ApplyNow } from '@mfe-rm-nx/shared-ui';

/* eslint-disable-next-line */
export interface DepositsUiComponentsProps {}

/* eslint-disable-next-line */
export interface DepositsComponentProps {
  type: string;
  interestRate: number;
}

export function DepositsComponent(props: DepositsComponentProps) {
  return (
    <>
      <div
        style={{
          width: '50%',
          border: 'blue 1px solid',
          background: '#1a0dab',
          color: 'white',
          padding: '15px',
          fontFamily: 'verdana',
        }}
      >
        {props.type} Deposits (Interest rate: {props.interestRate}%)
      </div>
      <ApplyNow />
    </>
  );
}

export function DepositsUiComponents(props: DepositsUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DepositsUiComponents!</h1>
    </div>
  );
}

export default DepositsUiComponents;

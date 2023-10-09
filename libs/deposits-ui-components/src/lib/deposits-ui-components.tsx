import styles from './deposits-ui-components.module.css';

/* eslint-disable-next-line */
export interface DepositsUiComponentsProps {}

/* eslint-disable-next-line */
export interface DepositsComponentProps {
  type: string;
}

export function DepositsComponent(props: DepositsComponentProps) {
  return (
    <div
      style={{
        width: '50%',
        border: 'blue 1px solid',
        background: '#003',
        color: 'white',
        padding: '15px',
        fontFamily: 'verdana',
      }}
    >
      <h2>{props.type} Deposits</h2>
    </div>
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

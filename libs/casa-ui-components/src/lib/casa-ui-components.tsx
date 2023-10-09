import styles from './casa-ui-components.module.css';
import { SmartCard } from '@mfe-rm-nx/shared-ui';

/* eslint-disable-next-line */
export interface CasaUiComponentsProps {}

export function CasaUiComponents(props: CasaUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CasaUiComponents!</h1>
      <SmartCard type="Unknown" />
    </div>
  );
}

/* eslint-disable-next-line */
export interface FooComponentProps {
  title: string;
}

export function FooComponent(props: FooComponentProps) {
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
      <h2>{props.title}</h2>
    </div>
  );
}

export default CasaUiComponents;

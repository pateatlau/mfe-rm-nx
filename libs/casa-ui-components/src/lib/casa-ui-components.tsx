import styles from './casa-ui-components.module.css';
import { SmartCard } from '@mfe-rm-nx/shared-ui';

/* eslint-disable-next-line */
export interface CasaUiComponentsProps {}

export function CasaUiComponents(props: CasaUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CasaUiComponents!</h1>
    </div>
  );
}

/* eslint-disable-next-line */
export interface CasaComponentProps {
  title: string;
}

export function CasaComponent(props: CasaComponentProps) {
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
        <h2>{props.title}</h2>
      </div>
      <SmartCard type="Unknown" />
    </>
  );
}

export default CasaUiComponents;

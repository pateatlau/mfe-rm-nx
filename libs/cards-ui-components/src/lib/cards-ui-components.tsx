import styles from './cards-ui-components.module.css';
import { ApplyNow, SmartCard } from '@mfe-rm-nx/shared-ui';

/* eslint-disable-next-line */
export interface CardsUiComponentsProps {}

export function CardsUiComponents(props: CardsUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CardsUiComponents!</h1>
    </div>
  );
}

export function SmartCards(props: CardsUiComponentsProps) {
  return (
    <div>
      <SmartCard type="Credit" />
      <SmartCard type="Debit" />
      <SmartCard type="Unknown" />
      <ApplyNow />
    </div>
  );
}

export default CardsUiComponents;

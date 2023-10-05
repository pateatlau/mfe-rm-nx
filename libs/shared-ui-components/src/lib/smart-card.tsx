import styles from './smart-card.module.css';

/* eslint-disable-next-line */
export interface SmartCardProps {
  type: string;
}

export function SmartCard(props: SmartCardProps) {
  return (
    <div
      className={styles['container']}
      style={{ backgroundColor: props.type === 'Credit' ? 'gold' : 'black' }}
    >
      Awesome {props.type} card
    </div>
  );
}

export default SmartCard;

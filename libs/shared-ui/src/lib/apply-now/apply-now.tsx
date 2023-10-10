import styles from './apply-now.module.css';

/* eslint-disable-next-line */
export interface ApplyNowProps {}

export function ApplyNow(props: ApplyNowProps) {
  return (
    <div className={styles['container']}>
      <button type="button">Apply Now!</button>
    </div>
  );
}

export default ApplyNow;

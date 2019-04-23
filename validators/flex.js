import { flexDirection, flexWrap } from '../constants/flex';
import log from '../utils/log';

/* eslint-disable-next-line consistent-return */
export function flexDirectionValidator(value) {
  try {
    if (!value || !flexDirection.includes(value)) {
      /* eslint-disable-next-line no-console */
      throw new Error(
        `Error with 'flex-direction: ${value}', flex-direction must by one of ${flexDirection.join(
          '|',
        )}`,
      );
    }
    return value;
  } catch (e) {
    log(e);
  }
}

/* eslint-disable-next-line consistent-return */
export function flexWrapValidator(value) {
  if (!value || !flexWrap.includes(value)) {
    /* eslint-disable-next-line no-console */
    log(
      `Error with 'flex-wrap: ${value}', flex-wrap must by one of ${flexWrap.join(
        '|',
      )}`,
    );
  }
  return value;
}

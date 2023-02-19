import { isNumeric } from '../math/isNumeric';
import { escapeString } from '../security/escapeString';
import { valueSerializer } from './valueSerializer';

export const httpBuildQuery = (
  queryData: object,
  numericPrefix: string | undefined | null = undefined,
  argSeparator = '&',
  tempKey: string | undefined | null = undefined
): string =>
  !queryData
    ? ''
    : Object.entries(queryData)
        .map(([k, value]) => {
          const key = tempKey ? `${tempKey}[${k}]` : k;

          return typeof value === 'object' && value
            ? httpBuildQuery(value, null, argSeparator, key)
            : `${escapeString(
                numericPrefix ? (isNumeric(key) ? numericPrefix + Number(key) : key) : key
              )}=${escapeString(valueSerializer(value))}`;
        })
        .filter((item) => item)
        .join(argSeparator)
        .replace(/[!'()*]/g, '');

import { CloudEventCustom } from '../utils/cloudEventCustom.js';
import type { CloudEventBaseParamsWithPayload } from '../types/CloudEventBaseParams.js';

export const createCloudMessage = <T>({
  source,
  destination,
  type,
  payload,
}: CloudEventBaseParamsWithPayload<T>): CloudEventCustom<T> => {
  return new CloudEventCustom<T>({
    source,
    destination,
    type,
    payload,
  });
};

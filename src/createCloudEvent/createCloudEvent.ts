import { CloudEventCustom } from '../utils/cloudEventCustom.js';
import type { CloudEventBaseParams } from '../types/CloudEventBaseParams.js';

export const createCloudEvent = ({
  source,
  destination,
  type,
}: CloudEventBaseParams) => {
  return new CloudEventCustom({
    source,
    destination,
    type,
  });
};

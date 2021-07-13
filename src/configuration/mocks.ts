import { DataSourceSettings } from '@grafana/data';
import { OpenSearchOptions } from '../types';
import { createDatasourceSettings } from '../dependencies/mocks';

export function createDefaultConfigOptions(): DataSourceSettings<OpenSearchOptions> {
  return createDatasourceSettings<OpenSearchOptions>({
    timeField: '@time',
    esVersion: 70,
    interval: 'Hourly',
    timeInterval: '10s',
    maxConcurrentShardRequests: 300,
    logMessageField: 'test.message',
    logLevelField: 'test.level',
    database: '',
    pplEnabled: false,
  });
}

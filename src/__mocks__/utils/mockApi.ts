import AxiosMockAdapter from 'axios-mock-adapter';
import { http } from 'services';

export const serviceMock = new AxiosMockAdapter(http);

import { type ParamType } from '../types/ParamTypeExtended';

export interface RootStackParams extends ParamType {
  Home: { email: string };
  Report: { email: string }
}

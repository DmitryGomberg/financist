import { EDateType } from './enums';

export type IStageTypes = {
   id: number;
   name: string;
   percent: number;
   time: number;
   dayType: EDateType;
};
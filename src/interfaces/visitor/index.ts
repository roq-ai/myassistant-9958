import { FacilityInterface } from 'interfaces/facility';
import { GetQueryInterface } from 'interfaces';

export interface VisitorInterface {
  id?: string;
  name: string;
  facility_id?: string;
  created_at?: any;
  updated_at?: any;

  facility?: FacilityInterface;
  _count?: {};
}

export interface VisitorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  facility_id?: string;
}

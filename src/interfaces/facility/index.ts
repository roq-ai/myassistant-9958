import { VisitorInterface } from 'interfaces/visitor';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface FacilityInterface {
  id?: string;
  name: string;
  description?: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;
  visitor?: VisitorInterface[];
  client?: ClientInterface;
  _count?: {
    visitor?: number;
  };
}

export interface FacilityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  client_id?: string;
}

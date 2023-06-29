import axios from 'axios';
import queryString from 'query-string';
import { VisitorInterface, VisitorGetQueryInterface } from 'interfaces/visitor';
import { GetQueryInterface } from '../../interfaces';

export const getVisitors = async (query?: VisitorGetQueryInterface) => {
  const response = await axios.get(`/api/visitors${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVisitor = async (visitor: VisitorInterface) => {
  const response = await axios.post('/api/visitors', visitor);
  return response.data;
};

export const updateVisitorById = async (id: string, visitor: VisitorInterface) => {
  const response = await axios.put(`/api/visitors/${id}`, visitor);
  return response.data;
};

export const getVisitorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/visitors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVisitorById = async (id: string) => {
  const response = await axios.delete(`/api/visitors/${id}`);
  return response.data;
};

import { $authHost } from './index';

export const createTicket = async (ticket) => {
  const { data } = await $authHost.post('api/ticket', ticket);
  console.log(data);
  return data;
};

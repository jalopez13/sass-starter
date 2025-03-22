'use server';

export const getMessage = async () => {
  return {
    type: 'GET_MESSAGE_SERVER_ACTION',
  };
};

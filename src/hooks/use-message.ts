'use client';

import { useQuery } from '@tanstack/react-query';
import { getMessage } from '@/actions/get-message';

export const useMessage = () => {
  const {
    data: message,
    isLoading: loading,
    error,
    refetch: fetchMessage,
  } = useQuery({
    queryKey: ['message'],
    queryFn: getMessage,
  });

  return {
    message,
    loading,
    error,
    fetchMessage,
  };
};

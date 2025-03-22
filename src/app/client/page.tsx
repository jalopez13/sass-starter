'use client';

import { useMessage } from '@/hooks/use-message';

const ClientComponent = () => {
  // client use hook - action get-message
  const { message, loading } = useMessage();

  return (
    <div className="container mx-auto py-6 h-screen flex items-center justify-center">
      Client Component - {loading ? 'Loading...' : message?.type}
    </div>
  );
};
export default ClientComponent;

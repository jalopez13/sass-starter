import { getMessage } from '@/actions/get-message';

const ServerComponent = async () => {
  // server action get-message
  const { type } = await getMessage();

  return (
    <div className="container mx-auto py-6 h-screen flex items-center justify-center">
      Server Component - {type}
    </div>
  );
};
export default ServerComponent;

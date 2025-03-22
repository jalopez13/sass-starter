import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

const Dashboard = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return <div>Dashboard - Private page</div>;
};

export default Dashboard;

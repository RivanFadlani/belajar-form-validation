import { useState } from 'react';
import Product from './components/ui/Product';
import LoginZod from './components/ui/LoginZod';

const App = () => {
  const [session, useSession] = useState<string | null>(null);
  return (
    <main className="flex min-h-screen w-screen flex-col items-center gap-4">
      {session ? <Product /> : <LoginZod />}
    </main>
  );
};

export default App;

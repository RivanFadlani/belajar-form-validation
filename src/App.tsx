import { useState } from 'react';
import Product from './components/ui/Product';
import Control from './components/ui/Control';

const App = () => {
  const [session, useSession] = useState<string | null>(null);
  return (
    <main className="flex min-h-screen w-screen flex-col items-center gap-4">
      {session ? <Product /> : <Control />}
    </main>
  );
};

export default App;

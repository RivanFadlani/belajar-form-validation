import { useState } from 'react';
import Product from './components/ui/Product';

const App = () => {
  const [session, useSession] = useState('ajg');
  return (
    <main className="flex min-h-screen w-screen flex-col items-center gap-4">
      {session ? <Product /> : <div>Login bang</div>}
    </main>
  );
};

export default App;

import React, { createContext, useState } from 'react'; // No change needed

type UserProgressState = 'cart' | 'checkout' | ''; // Allowed progress states

const UserProgressContext = createContext<UserProgressState>('');

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState<UserProgressState>('');

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  
  return (
    <UserProgressContext.Provider value={userProgress}>  // Provide only userProgress
      {children}
    </UserProgressContext.Provider>
  );
  
}

export default UserProgressContext;

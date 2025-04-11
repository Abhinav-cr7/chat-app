// src/App.js
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Login from "./login";
import ChatRoom from "./ChatRoom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
}

export default App;

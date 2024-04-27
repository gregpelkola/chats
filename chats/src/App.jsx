useEffect(() => {
  const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
  });

  return () => {
      unSub();
  };
}, [fetchUserInfo]);

if (isLoading) return <div className="loading">Loading...</div>;

return (
  <div className="container">
      {currentUser ? (
          <>
              <List />
              {chatId && <Chat />}
              {chatId && <Detail />}
          </>
      ) : (
          <Login />
      )}
      <Notification />
  </div>
);

export default App;
import React, { useState } from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {
  const [cardId, setCardId] = useState(0);

  const handleCardId = (id) => {
    setCardId(id);
  };

  return (
    <MyContext.Provider
      value={{
        cardId: cardId,
        handleCardId: handleCardId,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;

import React from 'react';

export const MyContext = React.createContext();

const MyProvider = () => {

    let name = "billy";



    return (
        <MyContext.Provider
            value={{
                name:name
            }} >
                {PaymentResponse.children }
        </MyContext.Provider>
    );
};

export default MyProvider;

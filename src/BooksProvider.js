import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";
import BooksData from "./BooksData.json";

const BooksContext = createContext();
export const useBooks = () => useContext(BooksContext);

export default function BooksProvider({ children }) {
    const [books, setBooks] = useState(BooksData);

    const addBook = (title, volume, price) =>
        setBooks([...books,
        {
            id: v4(),
            title,
            volume,
            price
        }]);
    
    return (
        <BooksContext.Provider value={{books, addBook}}>
            {children}
        </BooksContext.Provider>
    );
}

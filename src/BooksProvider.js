import { createContext, useState } from "react";
import BooksData from "./BooksData.json"

export const BooksContext = createContext();

export default function BooksProvider({ children }) {
    const [books, setBooks] = useState(BooksData);

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    )
}
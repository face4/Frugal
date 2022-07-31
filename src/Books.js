import BookForm from "./BookForm";
import BooksTable from "./BooksTable";
import { BooksContext } from "./BooksProvider";
import { useContext } from "react";

export default function Books() {
    const { books, setBooks } = useContext(BooksContext);

    const updateBooks = (newBook) => {
        setBooks([
            ...books,
            newBook
        ]);
    };

    return (
        <>
            <h1>Books</h1>
            <BookForm updateBooks={updateBooks} />
            <div className="container">
                <BooksTable data={books} />
            </div>
        </>
    )
}
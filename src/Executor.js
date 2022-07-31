import { useContext } from "react";
import { Button } from "react-bootstrap";
import { BooksContext } from "./BooksProvider";

export default function Executor() {
    const { books, setBooks } = useContext(BooksContext);
    
    return (
        <div className="d-grid gap-2">
            <Button variant="danger" size="lg" onClick={() => setBooks([])}>Plan</Button>
        </div>
    );
}
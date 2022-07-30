import React from "react";
import { useBooks } from "./BooksProvider";
import { Table } from "react-bootstrap";

export default function BooksTable() {
    const { books } = useBooks();
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>volume</td>
                    <td>price</td>
                </tr>
            </thead>
            <tbody>
                {books.map((book, i) => 
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{book.title}</td>
                        <td>{book.volume}</td>
                        <td>{book.price}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}
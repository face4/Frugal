import { Table } from "react-bootstrap";

export default function BooksTable({ data }) {
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Volume</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {data.map((book, index) =>
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.from} ~ {book.to}</td>
                        <td>{book.price}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}
import { useState } from "react";

export default function BookForm({ updateBooks }) {
    const [book, setBook] = useState({
        title: "title",
        from: 1,
        to: 2,
        price: 1000
    });

    const submit = e => {
        e.preventDefault();
        updateBooks(book);
    }

    return (
        <form onSubmit={submit}>
            <span><label>Title</label></span>
            <input
                type="text"
                onChange={event => setBook({ ...book, title: event.target.value })}
            />
            <br />

            <span><label>Volume</label></span>
            <input
                type="number"
                className="volume"
                onChange={event => setBook({ ...book, from: event.target.value })}
            />

            <label>〜<input
                type="number"
                className="volume"
                onChange={event => setBook({ ...book, to: event.target.value })}
            /></label>
            <br />

            <span><label>Price</label></span>
            <input
                type="number"
                onChange={event => setBook({ ...book, price: event.target.value })}
            />
            <br />

            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    )
}
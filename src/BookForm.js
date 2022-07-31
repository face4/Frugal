export default function BookForm({ books }) {

    const submit = e => {
        e.preventDefault();
        alert("hi");
    }

    return (
        <form onSubmit={submit}>
            <span><label>Title</label></span>
            <input type="text" />
            <br />

            <span><label>Volume</label></span>
            <input type="number" className="volume" />

            <label>〜<input type="number" className="volume" /></label>
            <br />

            <span><label>Price</label></span>
            <input type="number" />
            <br />

            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    )
}
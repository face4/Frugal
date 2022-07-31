export default function PointForm({ os }) {
    return (
        <form>
            <span><label>{os}</label></span>
            <input
                type="number"
                name={os}
                placeholder={5000} /> pts
        </form>
    );
}
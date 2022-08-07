import { FaAndroid, FaApple } from 'react-icons/fa';

export default function PointForm({ os }) {
    return (
        <form>
            <span><label>{os === "Android" ? <FaAndroid /> : <FaApple />}</label></span>
            <input
                type="number"
                name={os}
                placeholder={0}
            /> pts
        </form>
    );
}
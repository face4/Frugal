import { FaAndroid, FaApple } from "react-icons/fa";
import BooksTable from "./BooksTable";

export default function Result({ os, data }) {
    return (
        <>
            <h1>{os === "Android" ? <FaAndroid /> : <FaApple />}</h1>
            <p>0 / 0 pts</p>
            <BooksTable data={data} />
        </>
    );
}
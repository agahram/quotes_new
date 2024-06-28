import { useData } from "../context/FetchContext";

export default function Button() {
  const { request } = useData();
  return (
    <button className="buttonClass" onClick={request}>
      Get a quote
    </button>
  );
}

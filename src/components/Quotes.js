import { useData } from "../context/FetchContext";
export default function Quote() {
  const { quote } = useData();
  return <p className="quoteClass">"{quote}"</p>;
}

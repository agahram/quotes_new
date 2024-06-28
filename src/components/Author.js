import { useData } from "../context/FetchContext";

export default function Author() {
  const { author } = useData();
  return (
    <>
      <p className="authorClass">{author}</p>
    </>
  );
}

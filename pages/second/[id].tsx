import { useRouter } from "next/router";

export default function SecondDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.name}</h1>
      <p>{`熟練度: ${router.query.proficiency}`}</p>
    </div>
  );
}
import Link from "next/link";

export default function Page() {
  let cards = Array.from({ length: 6 }, (_, i) => i);

  return (
    <>
      <section className="cards-container">
        {cards.map((id) => (
          <Link className="card" key={id} href={`/card/${id}`}>
            {id}
          </Link>
        ))}
      </section>
    </>
  );
}

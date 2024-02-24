import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ res }: { res: Character }) {
  return (
    <li
      key={res.id}
      className="flex flex-col border-2 w-[320px] border-blue-600 rounded-lg px-auto"
    >
      <Link href={`/character/${res.id}`}>
        <Image src={res.image} width={320} height={350} alt={res.name} />
        <div className="flex flex-col gap-3 px-3 py-2 border ">
          <p className="text-xl font-semibold">{res.name}</p>
          <div className="flex gap-2 items-center">
            <div
              className={`w-5 h-5 ${
                res.status === "Alive"
                  ? "bg-green-600"
                  : res.status === "Dead"
                  ? "bg-red-600"
                  : "bg-gray-600"
              } rounded-full`}
            ></div>
            <span>{res.status}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

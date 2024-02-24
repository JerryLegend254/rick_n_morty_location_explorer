import { truncateString } from "@/app/lib/utils";
import Link from "next/link";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <li
      key={location.id}
      className="group rounded-lg border border-gray-300 px-4 py-2 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-300 hover:dark:bg-neutral-400/30 w-[300px] flex-wrap mx-auto"
    >
      <Link href={`/location/${location.id}`}>
        <h2 className={`mb-1 text-xl font-semibold`}>
          {truncateString(location.name)}
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70 text-balance`}>
          {location.type}
        </p>
        <div className="mt-4 flex justify-between items-center gap-4">
          <span className="flex-1 w-100 h-[2px] bg-gray-400"></span>
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-500 font-bold">
            &gt;
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <div className="uppercase tracking-widest mt-6 text-3xl font-bold flex justify-between mx-auto">
        <p className="text-center mx-auto md:mx-0">Rick and Morty</p>
        <span className="text-blue-900 hidden md:inline-block">
          location explorer
        </span>
      </div>
    </nav>
  );
}

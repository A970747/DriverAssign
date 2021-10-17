import Nav from './Nav';

export default function Header() {
  return (
    <header className="border-b-8 border-black">
      <div className="grid grid-cols-autoFr px-10">
        <h1 className="flex items-center text-4xl" >
          Driver Assigner
        </h1>
        <Nav />
      </div>
    </header>
  );
}

import Nav from './Nav';

export default function Header() {
  return (
    <header className="flex justify-center border-b-8 border-black">
      <div className="flex justify-between max-w-screen-xl w-full px-8">
        <h1 className="flex items-center text-4xl" >
          Driver Assigner
        </h1>
        <Nav />
      </div>
    </header>
  );
}

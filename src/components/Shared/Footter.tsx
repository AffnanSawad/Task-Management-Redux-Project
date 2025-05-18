
const Footter = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-white text-black items-center p-4">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z"></path>
    </svg>
    <p>
      TaskManager Pro © {new Date().getFullYear()} — All rights reserved
    </p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
      </svg>
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245..."></path>
      </svg>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4..."></path>
      </svg>
    </a>
  </nav>
</footer>

    );
};

export default Footter;
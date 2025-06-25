export default function Layout({ children }) {
  return (
    <div className="container">
      {/* <header>
          <h1>Welcome to the Page Module</h1>
        </header> */}
      <main>{children}</main>
      {/* <footer>
          <p>© 2025 Your App</p>
        </footer> */}
    </div>
  );
}

import MyNavigation from "./MyNavigation";

function Layout(props) {
  return (
    <div className="h-screen w-screen overflow-x-hidden flex items-center flex-col">
      {/* Navbar */}
      <MyNavigation cartCount={props.cartCount} />

      {/* Main */}
      <main className="w-full">{props.children}</main>

      <div className="flex-1"></div>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Zalando Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Layout;

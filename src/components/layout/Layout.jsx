import MyNavigation from "./MyNavigation";

function Layout(props) {
  return (
    <div>
      {/* Navbar */}
      <MyNavigation />

      {/* Main */}
      <main>{props.children}</main>

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

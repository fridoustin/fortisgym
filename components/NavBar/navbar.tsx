export const Navbar = () =>{
    return(
        <div className="drawer z-20">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-base-100 fixed top-0 w-full gap-2 px-8 py-4 md:px-28">
                <div className="navbar-start">
                    <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="lg:hidden btn btn-ghost"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                    </label>
                    <div className="pl-2 font-bold">Fortis Gym</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/program">Program</a></li>
                    <li><a href="/event">Event</a></li>
                    <li><a href="/membership">Membership</a></li>
                    </ul>
                </div>
                <div className="navbar-end pr-8">
                    <a className="btn" href="/auth/signin">Login</a>
                </div>
                </div>
            </div>

            <div className="drawer-side">
                <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-60 bg-base-200 pt-14">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/program">Program</a></li>
                <li><a href="/event">Event</a></li>
                <li><a href="/membership">Membership</a></li>
                </ul>
            </div>
        </div>
    );
};
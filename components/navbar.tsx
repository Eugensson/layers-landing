import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

export const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 z-50 py-4 lg:py-8 w-full">
        <div className="container max-w-5xl!">
          <div className="p-2 px-4 md:pr-2 grid grid-cols-2 lg:grid-cols-3 items-center border border-white/15 rounded-full backdrop-blur-2xl">
            <Logo />
            <Nav
              containerStyles="hidden lg:flex items-center justify-center"
              listStyles="flex items-center gap-6 font-medium"
            />
            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <Button
                size="md"
                type="button"
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                size="md"
                type="button"
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="pb-21 md:pb-24 lg:pb-30" />
    </>
  );
};

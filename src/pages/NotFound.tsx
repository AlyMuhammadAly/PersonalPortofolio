import { cn } from "../lib/utils";

function NotFound() {
  return (
    <div className="bg-foreground h-screen">
      <div className="bg-primary text-white animate-pulse font-bold capitalize">
        404 - page not found
      </div>{" "}
      <div className="flex flex-col items-center justify-center relative text-white min-h-screen">
        <h1 className="text-primary font-bold text-9xl m-1.75 animate-bounce">
          Oops!
        </h1>
        <h4 className="font-bold capitalize m-1 text-primary">
          404 - page not found
        </h4>
        <p className="text-primary font-bold m-1">
          This page you are looking for might have been removed or had its name
          changed or it's temporary unavailable{" "}
        </p>
        <a
          href="http://localhost:5173/#home"
          className={cn(
            "text-white font-bold uppercase bg-primary py-2 px-4 rounded-full hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          )}
        >
          go to homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;

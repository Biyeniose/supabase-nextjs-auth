export default function ErrorPage() {
  return (
    <>
      <div className="flex items-center my-7  flex-col justify-between">
        <h1 className=" text-2xl">Something went wrong ...</h1>
        <h1 className=" text-2xl">Make sure you are Signed In</h1>
      </div>

      <div className="flex items-center justify-center mt-5">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Back to HomePage{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </>
  );
}

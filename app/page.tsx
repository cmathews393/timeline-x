export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 py-32 text-center">
        <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
          Uncanny publication history
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Timeline&#8209;X
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A visual map of the X-Men publication history — see which series
          were running side by side in any given era.
        </p>
        <a
          href="/timeline"
          className="mt-4 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Explore the timeline
        </a>
      </main>
    </div>
  );
}

"use client";
import { Dispatch, SetStateAction, use, useState } from "react";

function toggleChecked(setValue: Dispatch<SetStateAction<boolean>>) {
  setValue((prev) => !prev);
}

function toggleSelected<T>(setValues: Dispatch<SetStateAction<T[]>>, item: T) {
  setValues((prev) =>
    prev.includes(item)
      ? prev.filter((value) => value !== item)
      : [...prev, item],
  );
}

export default function Timeline() {
  const [mainline, setMainline] = useState(true);
  const [soloChars, setSoloChars] = useState(["Wolverine"]);
  const [spinoffs, setSpinoffs] = useState(["X-Factor"]);

  return (
    <div className="relative min-h-screen w-full bg-neutral-950">
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-start gap-6 rounded-lg border border-neutral-800 bg-neutral-900/80 p-4 shadow-lg backdrop-blur">
        <label className="flex items-center gap-2 text-sm text-neutral-200">
          <input
            type="checkbox"
            className="h-4 w-4 accent-indigo-500"
            checked={mainline}
            onChange={() => toggleChecked(setMainline)}
          />
          Mainline
        </label>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
            Solo Characters
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {["Wolverine", "Deadpool", "Cyclops"].map((name) => (
              <label
                key={name}
                className="flex items-center gap-2 text-sm text-neutral-200"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-indigo-500"
                  checked={soloChars.includes(name)}
                  onChange={() => toggleSelected(setSoloChars, name)}
                />
                {name}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
            Spinoffs
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {["X-Factor", "X-Force", "Excalibur"].map((name) => (
              <label
                key={name}
                className="flex items-center gap-2 text-sm text-neutral-200"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-indigo-500"
                  checked={spinoffs.includes(name)}
                  onChange={() => toggleSelected(setSpinoffs, name)}
                />
                {name}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline canvas placeholder */}
      <div className="h-full w-full" />
    </div>
  );
}

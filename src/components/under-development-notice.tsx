
"use client";

export function UnderDevelopmentNotice() {
  return (
    <section
      aria-labelledby="development-notice-title"
      className="relative z-10 w-full px-4 pb-8 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        {/* Rope stretched between both corners */}
        <div className="relative h-8">
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 5 Q600 70 1200 5"
              fill="none"
              stroke="#9b8050"
              strokeWidth="4"
            />
            <path
              d="M0 5 Q600 70 1200 5"
              fill="none"
              stroke="#e5c98d"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
          </svg>

          {/* Rope attachment */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-3 z-10 h-7 w-1 -translate-x-1/2 bg-amber-300"
          />
        </div>

        {/* Hanging warning triangle */}
        <div className="relative z-10 -mt-1 flex justify-center">
          <svg
            viewBox="0 0 120 108"
            role="img"
            aria-label="Warning: construction ahead"
            className="h-24 w-24 drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)] sm:h-28 sm:w-28"
          >
            <path
              d="M60 5 L114 97 Q117 103 108 103 H12 Q3 103 6 97 L60 5Z"
              fill="#f5c451"
              stroke="#ffe39a"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M60 36 V66"
              stroke="#171717"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <circle cx="60" cy="83" r="5" fill="#171717" />
          </svg>
        </div>

        {/* Notice panel directly below the triangle */}
        <div className="relative -mt-1 w-full overflow-hidden border-y border-amber-400/40 bg-[#11110d] shadow-2xl shadow-black/30">
          <div
            aria-hidden="true"
            className="h-2 w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #f5c451 0px, #f5c451 12px, #171717 12px, #171717 24px)",
            }}
          />

          <div className="px-5 py-6 text-center sm:px-8 sm:py-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-amber-300">
              Important site notice
            </p>

            <h2
              id="development-notice-title"
              className="text-xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl"
            >
              This portfolio is being rebuilt.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-300 sm:text-base">
              You're viewing a work in progress, not the final portfolio.
              I'm reorganizing the site and updating its content.
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-amber-300">
              Please revisit soon for the completed version
            </p>
          </div>

          <div
            aria-hidden="true"
            className="h-2 w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #f5c451 0px, #f5c451 12px, #171717 12px, #171717 24px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

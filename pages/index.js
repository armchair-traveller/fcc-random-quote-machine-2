import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const quotes = [
      ["People don't do what they're told to do. They do what they're inspired to do", 'Jim Keller'],
      [
        "The rise of revered people have been witnessed. The world only sees the powerful, and fails to notice that, behind every person, there's always hard work they've never shown to others. Years of toiling alone.",
        'Anonymous',
      ],
      ["My child, we may be evolved, but deep down we're still animals", 'Mr. Big, Zootopia'],
      ['If you do something well, never do it for free.', 'Joker, The Dark Knight'],
    ],
    getRandomQuoteIdx = () => Math.floor(Math.random() * quotes.length),
    [[quote, author], setQuote] = useState(quotes[getRandomQuoteIdx()])

  return (
    <>
      <Head>
        <title>Random Quote Generator</title>
        <meta name="description" content="freeCodeCamp Random Quote Generator<" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='12 0 100 100'><text y='.9em' font-size='90'>💭</text></svg>"
        />
        <script defer async src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </Head>

      <main className="min-h-screen grid place-items-center">
        <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24" id="quote-box">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              role="img"
            >
              <defs>
                <pattern
                  id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
            </svg>

            <div className="relative">
              <blockquote className="mt-10">
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                  <p id="text">&ldquo;{quote}&rdquo;</p>
                  <p id="author">- {author}</p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                      <div className="inline-flex rounded-md shadow">
                        <button
                          id="new-quote"
                          onClick={function generateQuote() {
                            const q = quotes[getRandomQuoteIdx()],
                              [newQuote] = q
                            newQuote == quote ? generateQuote() : setQuote(q)
                          }}
                          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Another One
                        </button>
                      </div>
                      <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                          id="tweet-quote"
                          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${quote}%22 ${author}`}
                          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                        >
                          Tweet ⬆
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

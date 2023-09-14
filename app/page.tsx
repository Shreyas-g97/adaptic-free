import './globals.css'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">What is the research question?</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your research question"
          />
      </div>
    </main>
  )
}

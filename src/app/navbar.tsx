import Image from "next/image"
export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-gray-100">
      <div className="mx-16 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-28 items-center justify-between">
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <a href="/" className="flex flex-shrink-0 items-center">
              <Image className="h-12 w-auto rounded-full" src="/TimeKubeLogo.png" alt="TimeKube Logo" width={64} height={64}/>
            </a>
            <div className="ml-6">
              <div className="flex space-x-10">
                <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-2xl font-medium" aria-current="page">TimeKube</a>
              </div>
            </div>
            <div className="ml-6">
              <div className="bg-purple-200 h-8 mt-2 text-white rounded-3xl px-6 py-1 text-md font-bold" aria-current="page">v1.0.0</div>
            </div>
          </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-10">
                <a href="/" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Home</a>
                <a href="/dashboard/cluster" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Clusters</a>
                <a href="/dashboard/snapshots" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Snapshots</a>
                <a href="/dashboard/backup" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Backup</a>
                <a href="/dashboard/metrics" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Metrics</a>
                <a href="https://github.com/oslabs-beta/TimeKube/" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">GitHub</a>
              </div>
            </div>
        </div>
      </div>

      <div className="lg:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
          <a href="/dashboard/cluster" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Clusters</a>
          <a href="/dashboard/snapshots" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Snapshots</a>
          <a href="/dashboard/backup" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Backup</a>
          <a href="/dashboard/metrics" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Clusters</a>
          <a href="https://github.com/oslabs-beta/TimeKube/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">GitHub</a>
        </div>
      </div>
    </nav>
  )
}

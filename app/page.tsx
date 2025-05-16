import Link from "next/link"
import { Button } from "@/components/ui/button"
import TaskList from "@/components/task-list"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#077A7D] p-1">
              <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white">
                <path
                  d="M13 2L4.094 12.688a1 1 0 00.718 1.687H11l-1 7.313 8.906-10.688a1 1 0 00-.718-1.687H13l1-7.313z"
                  fill="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[#077A7D]">Snapii</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/tasks" className="text-gray-300 hover:text-white">
              DISCOVER
            </Link>
            <Link href="/manage" className="text-gray-300 hover:text-white">
              CREATE
            </Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-white">
              RANKINGS
            </Link>
            <Link href="/activity" className="text-gray-300 hover:text-white">
              ACTIVITY
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-white">
              PROFILE
            </Link>
            <Link href="/api-docs" className="text-gray-300 hover:text-white flex items-center">
              DEVELOPERS <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                CONNECT
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
                  className="ml-1 h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Button>
            </div>
            <Button className="bg-[#077A7D] hover:bg-[#056264]">SIGN IN</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight">EXPLORE TASKS</h2>
            <p className="max-w-2xl text-gray-400">
              Snapii empowers creators by connecting them with social media enthusiasts who help boost engagement across
              platforms like Instagram, Twitter, YouTube, TikTok, and Facebook. Whether you're launching a new project,
              growing your personal brand, or building community momentum Snapii helps you get the visibility you
              deserve. Post a task, get real engagement, and reward your supporters. It's simple, fast, and rewarding
              for creators and their fans.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#077A7D] hover:bg-[#056264]">CREATE TASK</Button>
              <Button variant="outline" className="border-[#077A7D] text-[#077A7D] hover:bg-[#077A7D]/10">
                MY REWARDS
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-[#077A7D]/20 to-[#077A7D]/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#077A7D]/20">
              <svg className="h-6 w-6 text-[#077A7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium">Quick Tasks</h3>
            <p className="text-gray-400">Complete simple social media tasks in minutes and earn rewards instantly.</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#077A7D]/20 to-[#077A7D]/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#077A7D]/20">
              <svg className="h-6 w-6 text-[#077A7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium">Flexible Rewards</h3>
            <p className="text-gray-400">Get paid in cryptocurrency or tokens based on your preference.</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#077A7D]/20 to-[#077A7D]/5 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#077A7D]/20">
              <svg className="h-6 w-6 text-[#077A7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium">Secure & Verified</h3>
            <p className="text-gray-400">All tasks and rewards are verified through our secure blockchain system.</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <div className="relative">
            <Button variant="outline" className="border-gray-700 text-gray-300">
              Task Status
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
                className="ml-1 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
          </div>
          <div className="relative">
            <Button variant="outline" className="border-gray-700 text-gray-300">
              Platform
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
                className="ml-1 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
          </div>
          <div className="relative">
            <Button variant="outline" className="border-gray-700 text-gray-300">
              Reward Type
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
                className="ml-1 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
          </div>
        </div>

        <TaskList />
      </main>
    </div>
  )
}

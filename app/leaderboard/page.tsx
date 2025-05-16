import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Trophy } from "lucide-react"

export default function Leaderboard() {
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
          </nav>

          <Button className="bg-[#077A7D] hover:bg-[#056264]">USERNAME</Button>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Rankings</h1>
            <p className="mt-2 text-gray-400">Top performers in the Snapii community</p>
          </div>

          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="alltime">All Time</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="relative border-gray-800 bg-gray-900">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-silver-500 text-black">
                      <Trophy className="h-6 w-6" />
                      <span className="absolute font-bold">2</span>
                    </div>
                  </div>
                  <CardContent className="mt-8 p-6 text-center">
                    <Avatar className="mx-auto h-16 w-16 border-2 border-silver-500">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user2" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 text-lg font-bold">@user2</h3>
                    <p className="text-sm text-gray-400">87 tasks completed</p>
                    <div className="mt-4">
                      <Badge className="bg-silver-500 text-black">$1,245 earned</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative border-gray-800 bg-gray-900">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-black">
                      <Trophy className="h-8 w-8" />
                      <span className="absolute font-bold">1</span>
                    </div>
                  </div>
                  <CardContent className="mt-10 p-6 text-center">
                    <Avatar className="mx-auto h-20 w-20 border-4 border-yellow-500">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user1" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 text-xl font-bold">@user1</h3>
                    <p className="text-sm text-gray-400">124 tasks completed</p>
                    <div className="mt-4">
                      <Badge className="bg-yellow-500 text-black">$2,345 earned</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative border-gray-800 bg-gray-900">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-white">
                      <Trophy className="h-6 w-6" />
                      <span className="absolute font-bold">3</span>
                    </div>
                  </div>
                  <CardContent className="mt-8 p-6 text-center">
                    <Avatar className="mx-auto h-16 w-16 border-2 border-amber-700">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user3" />
                      <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 text-lg font-bold">@user3</h3>
                    <p className="text-sm text-gray-400">65 tasks completed</p>
                    <div className="mt-4">
                      <Badge className="bg-amber-700">$987 earned</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Top Performers This Week</CardTitle>
                  <CardDescription className="text-gray-400">
                    Users who completed the most tasks this week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[4, 5, 6, 7, 8, 9, 10].map((rank) => (
                      <div
                        key={rank}
                        className="flex items-center justify-between rounded-lg border border-gray-800 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 font-bold">
                            {rank}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-user.jpg" alt={`@user${rank}`} />
                            <AvatarFallback>U{rank}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">@user{rank}</div>
                            <div className="text-sm text-gray-400">{100 - rank * 8} tasks completed</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${(1000 - rank * 100).toLocaleString()}</div>
                          <div className="text-sm text-gray-400">earned</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="mt-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Monthly Leaderboard</CardTitle>
                  <CardDescription className="text-gray-400">Top performers for the current month</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Monthly leaderboard data would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alltime" className="mt-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>All-Time Leaderboard</CardTitle>
                  <CardDescription className="text-gray-400">Top performers since the beginning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">All-time leaderboard data would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Youtube, Facebook, Copy, ExternalLink } from "lucide-react"
import { TikTokIcon } from "@/components/icons"
import Link from "next/link"

export default function Profile() {
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
          <div className="mb-8 flex flex-col items-center md:flex-row md:items-start md:gap-8">
            <Avatar className="h-24 w-24 border-4 border-[#077A7D]">
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>

            <div className="mt-4 text-center md:mt-0 md:text-left">
              <h1 className="text-2xl font-bold">@username</h1>
              <p className="mt-1 text-gray-400">Joined April 2023</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge className="bg-[#077A7D]">Level 12</Badge>
                <Badge className="bg-gray-700">Tasks Completed: 87</Badge>
                <Badge className="bg-gray-700">Tasks Created: 15</Badge>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                  <Copy className="mr-1 h-4 w-4" />
                  Copy ID
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
                  Connect Wallet
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 md:ml-auto md:mt-0">
              <div className="text-center">
                <div className="text-2xl font-bold">$1,245.32</div>
                <div className="text-sm text-gray-400">Total Earnings</div>
              </div>
              <Button className="bg-[#077A7D] hover:bg-[#056264]">Withdraw Funds</Button>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            <Card className="border-gray-800 bg-gray-900">
              <CardContent className="p-4 text-center">
                <Instagram className="mx-auto mb-2 h-6 w-6 text-pink-500" />
                <p className="text-sm text-gray-400">Instagram</p>
                <p className="font-medium">Connected</p>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-900">
              <CardContent className="p-4 text-center">
                <Youtube className="mx-auto mb-2 h-6 w-6 text-red-500" />
                <p className="text-sm text-gray-400">YouTube</p>
                <p className="font-medium">Connected</p>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-900">
              <CardContent className="p-4 text-center">
                <svg className="mx-auto mb-2 h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
                <p className="text-sm text-gray-400">Twitter</p>
                <p className="font-medium">Connected</p>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-900">
              <CardContent className="p-4 text-center">
                <TikTokIcon className="mx-auto mb-2 h-6 w-6" />
                <p className="text-sm text-gray-400">TikTok</p>
                <p className="font-medium">Connected</p>
              </CardContent>
            </Card>
            <Card className="border-gray-800 bg-gray-900">
              <CardContent className="p-4 text-center">
                <Facebook className="mx-auto mb-2 h-6 w-6 text-blue-500" />
                <p className="text-sm text-gray-400">Facebook</p>
                <p className="text-gray-400 text-sm">Not Connected</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900">
              <TabsTrigger value="completed">Completed Tasks</TabsTrigger>
              <TabsTrigger value="created">Created Tasks</TabsTrigger>
              <TabsTrigger value="rewards">Rewards History</TabsTrigger>
            </TabsList>

            <TabsContent value="completed" className="mt-4">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Tasks You've Completed</CardTitle>
                  <CardDescription className="text-gray-400">
                    View all the tasks you've successfully completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Instagram className="h-8 w-8 text-pink-500" />
                          <div>
                            <div className="font-medium">Like & Comment on Post</div>
                            <div className="text-sm text-gray-400">Completed on Apr 12, 2023</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">0.005 ETH</div>
                          <div className="text-sm text-gray-400">$9.99</div>
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                      View All Completed Tasks
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="created" className="mt-4">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Tasks You've Created</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage the tasks you've created for others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Youtube className="h-8 w-8 text-red-500" />
                          <div>
                            <div className="font-medium">Subscribe & Like Video</div>
                            <div className="text-sm text-gray-400">Created on Apr 15, 2023</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-600/20 text-green-400">Active</Badge>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                      View All Created Tasks
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="mt-4">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Rewards History</CardTitle>
                  <CardDescription className="text-gray-400">Track all your earnings and withdrawals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                        <div>
                          <div className="font-medium">Task Reward</div>
                          <div className="text-sm text-gray-400">Apr 18, 2023</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-400">+0.005 ETH</div>
                          <div className="text-sm text-gray-400">$9.99</div>
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                      View Complete History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

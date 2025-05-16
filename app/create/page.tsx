import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CreateTask() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <header className="border-b border-gray-800 px-4 py-4">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Tasks
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold">Create Snapii Task</h1>

          <Card className="border-gray-800 bg-gray-900">
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the details of the task you want users to complete
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select>
                  <SelectTrigger className="border-gray-700 bg-gray-800">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-700 bg-gray-800">
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-type">Task Type</Label>
                <Select>
                  <SelectTrigger className="border-gray-700 bg-gray-800">
                    <SelectValue placeholder="Select task type" />
                  </SelectTrigger>
                  <SelectContent className="border-gray-700 bg-gray-800">
                    <SelectItem value="like">Like Post</SelectItem>
                    <SelectItem value="comment">Comment on Post</SelectItem>
                    <SelectItem value="follow">Follow Account</SelectItem>
                    <SelectItem value="share">Share Post</SelectItem>
                    <SelectItem value="subscribe">Subscribe to Channel</SelectItem>
                    <SelectItem value="retweet">Retweet</SelectItem>
                    <SelectItem value="custom">Custom Task</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="link">Content Link</Label>
                <Input
                  id="link"
                  placeholder="https://instagram.com/your-post-link"
                  className="border-gray-700 bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Task Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what users need to do to complete this task"
                  className="min-h-[100px] border-gray-700 bg-gray-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reward-amount">Reward Amount</Label>
                  <Input id="reward-amount" type="number" placeholder="0.005" className="border-gray-700 bg-gray-800" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reward-currency">Reward Currency</Label>
                  <Select>
                    <SelectTrigger className="border-gray-700 bg-gray-800">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent className="border-gray-700 bg-gray-800">
                      <SelectItem value="eth">ETH</SelectItem>
                      <SelectItem value="tokens">TOKENS</SelectItem>
                      <SelectItem value="usdc">USDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiration">Expiration (hours)</Label>
                <Input id="expiration" type="number" placeholder="24" className="border-gray-700 bg-gray-800" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-completions">Maximum Completions</Label>
                <Input id="max-completions" type="number" placeholder="100" className="border-gray-700 bg-gray-800" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#077A7D] hover:bg-[#056264]">Create Task</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Instagram, ExternalLink, Clock, Award } from "lucide-react"

export default function TaskDetail({ params }: { params: { id: string } }) {
  // This would normally fetch the task based on the ID
  const task = {
    id: params.id,
    title: "Like and Comment on Instagram Post",
    platform: "Instagram",
    creator: "creator123",
    description: "Like my latest Instagram post and leave a meaningful comment about the content.",
    instructions: [
      "Go to @creator123 on Instagram",
      "Find the latest post (pinned at the top)",
      "Like the post",
      "Leave a comment with at least 5 words",
      "Screenshot your comment as proof",
    ],
    link: "https://instagram.com/creator123",
    reward: {
      amount: "0.005",
      currency: "ETH",
      usdValue: "$9.99",
    },
    timeLeft: "23:11:30",
    status: "Active",
    completions: {
      current: 45,
      max: 100,
    },
  }

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
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{task.title}</h1>
              <div className="mt-2 flex items-center gap-2">
                <Badge className="bg-[#077A7D]">
                  <Instagram className="mr-1 h-4 w-4" />
                  {task.platform}
                </Badge>
                <span className="text-sm text-gray-400">Created by @{task.creator}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-lg font-bold">
                <div className="h-5 w-5 rounded-full bg-[#077A7D]"></div>
                {task.reward.amount} ${task.reward.currency}
              </div>
              <div className="text-sm text-gray-400">{task.reward.usdValue}</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Task Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{task.description}</p>

                  <div>
                    <h3 className="mb-2 font-medium">Instructions:</h3>
                    <ol className="list-inside list-decimal space-y-2 text-gray-300">
                      {task.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="pt-4">
                    <Link href={task.link} target="_blank">
                      <Button className="w-full bg-[#077A7D] hover:bg-[#056264]">
                        Go to Instagram Post
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Submit Proof</CardTitle>
                  <CardDescription className="text-gray-400">
                    Upload a screenshot showing you completed the task
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-700 bg-gray-800 p-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Drag and drop your screenshot here, or click to browse</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#077A7D] hover:bg-[#056264]">Submit for Verification</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Task Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Status:</span>
                    <Badge className="bg-green-600/20 text-green-400">{task.status}</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Time Left:</span>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      {task.timeLeft}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Completions:</span>
                    <span className="text-sm font-medium">
                      {task.completions.current}/{task.completions.max}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                    <div
                      className="h-full bg-[#077A7D]"
                      style={{ width: `${(task.completions.current / task.completions.max) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Reward</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="text-lg font-bold">
                        {task.reward.amount} ${task.reward.currency}
                      </div>
                      <div className="text-sm text-gray-400">{task.reward.usdValue}</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400">
                    Rewards are automatically sent to your connected wallet after your submission is verified.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

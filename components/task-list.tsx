import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Instagram, Youtube, Facebook, ExternalLink } from "lucide-react"
import Link from "next/link"
import { TikTokIcon } from "@/components/icons"

const tasks = [
  {
    id: 1,
    type: "Like & Comment",
    platform: "instagram",
    status: "New",
    howToEarn: "Like and comment on post: @creator123",
    reward: {
      amount: "0.005",
      currency: "ETH",
      usdValue: "$9.99",
    },
    timeLeft: "23:11:30",
    link: "https://instagram.com/creator123",
  },
  {
    id: 2,
    type: "Subscribe & Like",
    platform: "youtube",
    status: "New",
    howToEarn: "Subscribe to channel and like latest video",
    reward: {
      amount: "5,000",
      currency: "TOKENS",
      usdValue: "$15.14",
    },
    timeLeft: "33:05:05",
    daysLeft: "2 days left",
    link: "https://youtube.com/creator123",
  },
  {
    id: 3,
    type: "Retweet & Follow",
    platform: "twitter",
    status: "New",
    howToEarn: "Retweet post and follow @twitterCreator",
    reward: {
      amount: "0.0045",
      currency: "ETH",
      usdValue: "$8.90",
    },
    timeLeft: "18:22:15",
    link: "https://twitter.com/twitterCreator",
  },
  {
    id: 4,
    type: "Follow Account",
    platform: "tiktok",
    status: "New",
    howToEarn: "Follow @tiktokCreator and like recent video",
    reward: {
      amount: "0.0056",
      currency: "ETH",
      usdValue: "$11.20",
    },
    timeLeft: "31:39:42",
    link: "https://tiktok.com/@tiktokCreator",
  },
  {
    id: 5,
    type: "Share Post",
    platform: "facebook",
    status: "New",
    howToEarn: "Share post and tag 3 friends",
    reward: {
      amount: "3,000",
      currency: "TOKENS",
      usdValue: "$9.05",
    },
    timeLeft: "12:45:30",
    link: "https://facebook.com/creator123",
  },
]

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "instagram":
      return <Instagram className="h-5 w-5 text-pink-500" />
    case "youtube":
      return <Youtube className="h-5 w-5 text-red-500" />
    case "tiktok":
      return <TikTokIcon className="h-5 w-5" />
    case "facebook":
      return <Facebook className="h-5 w-5 text-blue-500" />
    case "twitter":
      return (
        <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      )
    default:
      return <ExternalLink className="h-5 w-5" />
  }
}

export default function TaskList() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 bg-gray-900">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">TASK TYPE</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">STATUS</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">DESCRIPTION</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">REWARDS</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">TIME LEFT</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  {getPlatformIcon(task.platform)}
                  <span className="text-sm font-medium text-gray-200">{task.type}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <Badge className="bg-[#077A7D]/30 text-[#07D9DE]">
                  <span className="mr-1 h-2 w-2 rounded-full bg-[#07D9DE]"></span>
                  {task.status}
                </Badge>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">{task.howToEarn}</span>
                  <Link href={task.link} target="_blank">
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </td>
              <td className="px-4 py-4">
                <div>
                  <div className="flex items-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-[#077A7D]"></div>
                    <span className="text-sm font-medium text-gray-200">
                      {task.reward.amount} ${task.reward.currency}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">{task.reward.usdValue}</div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm text-gray-200">{task.timeLeft}</div>
                {task.daysLeft && <div className="text-sm text-gray-400">{task.daysLeft}</div>}
              </td>
              <td className="px-4 py-4">
                <Button className="bg-[#077A7D] hover:bg-[#056264] text-xs">Complete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

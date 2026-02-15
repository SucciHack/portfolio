import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `${process.env.GITHUB_CONTRIBUTIONS_API_URL}/v4/${GITHUB_USERNAME}`,
        {
          next: { revalidate: 86400 }, // Cache for 1 day
        }
      )

      if (!res.ok) {
        console.error(
          `Failed to fetch GitHub contributions: ${res.status} ${res.statusText}`
        )
        return []
      }

      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions || []
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error)
      return []
    }
  },
  ["github-contributions", GITHUB_USERNAME],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)

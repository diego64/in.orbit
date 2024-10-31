import { Loader2 } from 'lucide-react'
import { useGetWeekSummary } from '../http/generated/api'

export function Application() {
  const { data, isLoading } = useGetWeekSummary()

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return <div>{JSON.stringify(data, null, 2)}</div>

  // return (
  //   <Dialog>
  //     {data.summary.total > 0 ? (
  //       <WeeklySummary summary={data.summary} />
  //     ) : (
  //       <EmptyGoals />
  //     )}

  //     <CreateGoal />
  //   </Dialog>
  // )
}
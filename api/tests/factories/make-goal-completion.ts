import { db } from '../../src/db'
import { goalCompletions } from '../../src/db/schema'
import type { InferInsertModel } from 'drizzle-orm'

export async function makeGoalCompletion(
  overrides: Partial<InferInsertModel<typeof goalCompletions>> &
    Pick<InferInsertModel<typeof goalCompletions>, 'goalId'>
) {
  const [result] = await db
    .insert(goalCompletions)
    .values(overrides)
    .returning()

  return result
}
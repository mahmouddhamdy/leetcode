function earliestTime(tasks: number[][]): number {
  let earliestTime = Number.MAX_SAFE_INTEGER;

  for (const task of tasks) {
    if (task[1] + task[0] < earliestTime) {
      earliestTime = task[1] + task[0];
    }
  }

  return earliestTime;
}

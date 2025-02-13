
// Time: O(Nlog26) and Space: O(26)
// Time: O(N) and Space: O(26)

// Not Optimal

class Solution {
    public int leastInterval(char[] tasks, int n) {
        if (n == 0) {
            return tasks.length;
        }

        // Step 1: Count frequency of tasks
        Map<Character, Integer> taskCount = new HashMap<>();
        for (char t : tasks) {
            taskCount.put(t, taskCount.getOrDefault(t, 0) + 1);
        }

        // Step 2: Max heap (to always pick the most frequent task first)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(taskCount.values());

        // Step 3: Queue to manage cooldown (stores [task count left, available time])
        Queue<int[]> cooldownQueue = new LinkedList<>();

        int time = 0;

        while (!maxHeap.isEmpty() || !cooldownQueue.isEmpty()) {
            time++;

            // If a task is available, schedule it
            if (!maxHeap.isEmpty()) {
                int count = maxHeap.poll() - 1;
                if (count > 0) {
                    cooldownQueue.offer(new int[]{count, time + n});
                }
            }

            // If a task's cooldown has expired, add it back to the heap
            if (!cooldownQueue.isEmpty() && cooldownQueue.peek()[1] == time) {
                maxHeap.offer(cooldownQueue.poll()[0]);
            }
        }

        return time;
    }
}

// Optimal

class Solution {
    public int leastInterval(char[] tasks, int n) {
        if (n == 0) {
            return tasks.length;
        }

        // Step 1: Count frequency of tasks
        Map<Character, Integer> taskCount = new HashMap<>();
        for (char t : tasks) {
            taskCount.put(t, taskCount.getOrDefault(t, 0) + 1);
        }

        // Step 2: Max heap (to always pick the most frequent task first)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(taskCount.values());

        // Step 3: Queue to manage cooldown (stores [task count left, available time])
        Queue<int[]> cooldownQueue = new LinkedList<>();

        int time = 0;

        while (!maxHeap.isEmpty() || !cooldownQueue.isEmpty()) {
            time++;

            // If a task is available, schedule it
            if (!maxHeap.isEmpty()) {
                int count = maxHeap.poll() - 1;
                if (count > 0) {
                    cooldownQueue.offer(new int[]{count, time + n});
                }
            }

            // If a task's cooldown has expired, add it back to the heap
            if (!cooldownQueue.isEmpty() && cooldownQueue.peek()[1] == time) {
                maxHeap.offer(cooldownQueue.poll()[0]);
            }
        }

        return time;
    }
}



// Time: O((candidates + k)log n)  Space: O(n)

class Solution {
    class Pair {
        int cost;
        int idx;

        Pair(int cost, int idx) {
            this.cost = cost;
            this.idx = idx;
        }
    }

    public long totalCost(int[] costs, int k, int candidates) {
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>(new Comparator<Pair>() {
            @Override
            public int compare(Pair p1, Pair p2) {
                if (p1.cost == p2.cost) {
                    return p1.idx - p2.idx;
                } else {
                    return p1.cost - p2.cost;
                }
            }
        });

        int left = 0;
        int right = costs.length - 1;

        while ((left < candidates) && (left <= costs.length - 1)) {
            pq.offer(new Pair(costs[left], left));
            left++;
        }
        while ((right >= left) && (right >= costs.length - candidates)) {
            pq.offer(new Pair(costs[right], right));
            right--;
        }

        long totalCost = 0;

        while (k-- > 0) {
            Pair x = pq.poll();
            totalCost += x.cost;

            if (x.idx < left && left <= right) {
                pq.offer(new Pair(costs[left], left));
                left++;
            }
            if (x.idx > right && right >= left) {
                pq.offer(new Pair(costs[right], right));
                right--;
            }
        }

        return totalCost;
    }
}

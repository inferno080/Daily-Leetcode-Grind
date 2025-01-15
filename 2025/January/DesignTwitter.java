class Tweet {
    private int tweetId;
    private int timeStamp;
    private User author;

    public Tweet(int x, int y, User auth) {
        this.tweetId = x;
        this.timeStamp = y;
        this.author = auth;
    }

    public int getTweetId() {
        return this.tweetId;
    }

    public int getTimeStamp() {
        return this.timeStamp;
    }

    public User getAuthor() {
        return this.author;
    }
}

class User {
    private ArrayList<Tweet> tweets;
    private int uid;
    private HashSet<User> followers;
    private HashSet<User> following;
    private PriorityQueue<Tweet> feed;

    public User (int x) {
        this.tweets = new ArrayList<Tweet>();
        this.followers = new HashSet<User>();
        this.following = new HashSet<User>();
        this.feed = new PriorityQueue<Tweet>(new Comparator<Tweet>() {
            public int compare(Tweet t1, Tweet t2) {
                return t2.getTimeStamp() - t1.getTimeStamp();
            }
        });
        this.uid = x;
    }

    public boolean equals(User u) {
        return this.uid == u.uid;
    }

    public ArrayList<User> getFollowers() {
        return new ArrayList<User>(this.followers);
    }

    public void follow(User u) {
        if((this.uid == u.uid) || this.following.contains(u))
            return;
        this.following.add(u);
        for(Tweet t : u.getTweets()) {
            this.feed.offer(t);
        }
    }

    public void getFollowed(User u) {
        if((this.uid == u.uid) || this.followers.contains(u))
            return;
        this.followers.add(u);
    }

    public void removeFollower(User u) {
        if((this.uid == u.uid) || !this.followers.contains(u))
            return;
        this.followers.remove(u);
    }

    public void removeFollowing(User u) {
        if((this.uid == u.uid) || !this.following.contains(u))
            return;
        this.following.remove(u);
         PriorityQueue<Tweet> temp = new PriorityQueue<Tweet>(new Comparator<Tweet>() {
            public int compare(Tweet t1, Tweet t2) {
                return t2.getTimeStamp() - t1.getTimeStamp();
            }
        });
        while(this.feed.size() > 0) {
            Tweet t = this.feed.poll();
            if(t.author.uid != u.uid) {
                temp.offer(t);
            }
        }
        this.feed = temp;
    }

    public ArrayList<User> getFollowing() {
        return new ArrayList<User>(this.following);
    }

    public int getId() {
        return this.uid;
    }

    public ArrayList<Tweet> getTweets() {
        return new ArrayList<Tweet>(this.tweets);
    }

    public ArrayList<Tweet> getFeed() {
        ArrayList<Tweet> temp = new ArrayList<Tweet>();
        for (int i = 0; i < 10 && !this.feed.isEmpty(); i++) {
            temp.add(this.feed.poll());
        }
        for (Tweet t : temp) {
            this.feed.offer(t);
        }
        return temp;
    }

    public void addToFeed(Tweet t) {
        this.feed.offer(t);
    }

    public void tweet(int id, int ts) {
        Tweet newTweet = new Tweet(id, ts, this);
        this.tweets.add(newTweet);
        this.feed.add(newTweet);
        for (User f : this.followers) {
            f.addToFeed(newTweet);
        }
    }
}

class Twitter {
    private int timeStamp;
    private HashMap<Integer, User> users;

    public Twitter() {
        this.timeStamp = 0;
        this.users = new HashMap<Integer, User>();
    }

    public void postTweet(int userId, int tweetId) {
        if (!this.users.containsKey(userId)) {
            this.users.put(userId, new User(userId));
        }
        User u = this.users.get(userId);
        u.tweet(tweetId, timeStamp);
        this.timeStamp++;
    }

    public List<Integer> getNewsFeed(int userId) {
        List<Integer> temp = new ArrayList<Integer>();
        for (Tweet t : this.users.get(userId).getFeed()) {
            temp.add(t.getTweetId());
        }
        return temp;
    }

    public void follow(int followerId, int followeeId) {
        if (!this.users.containsKey(followerId)) {
            this.users.put(followerId, new User(followerId));
        }
        if (!this.users.containsKey(followeeId)) {
            this.users.put(followeeId, new User(followeeId));
        }
        User u1 = this.users.get(followerId);
        User u2 = this.users.get(followeeId);
        u1.follow(u2);
        u2.getFollowed(u1);
    }

    public void unfollow(int followerId, int followeeId) {
        if (this.users.containsKey(followerId) && this.users.containsKey(followeeId)) {
            User u1 = this.users.get(followerId);
            User u2 = this.users.get(followeeId);
            u1.removeFollowing(u2);
            u2.removeFollower(u1);
        }
    }
}

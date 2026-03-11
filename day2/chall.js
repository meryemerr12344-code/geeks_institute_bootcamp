db.users.insertOne({
  username: "devMeryem",
  bio: "Full-stack developer passionate about databases.",
  socialLinks: {
    github: "github.com/devMeryem",
    twitter: "twitter.com/devMeryem",
    linkedin: "linkedin.com/in/devMeryem"
  }
})
db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: ObjectId("65c2b111a1"),
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      username: "CodeMaster",
      text: "Great article! Very clear.",
      timestamp: new Date()
    }
  ]
})
comments: [
  {
    username: "DevAli",
    text: "This helped me understand MongoDB!",
    timestamp: new Date()
  },
  {
    username: "TechFan",
    text: "Nice explanation!",
    timestamp: new Date()
  }
]
db.posts.find({ title: "Why I Love MongoDB" })
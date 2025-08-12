const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Drone Flight Paths",
      excerpt: "Learn how to improve your drone's efficiency with optimized flight paths.",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Understanding Gyroscope Data",
      excerpt: "A deep dive into interpreting gyroscope readings for better flight control.",
      date: "April 28, 2023"
    },
    {
      id: 3,
      title: "Drone Maintenance 101",
      excerpt: "Essential maintenance tips to keep your drone in top condition.",
      date: "March 10, 2023"
    }
  ]

  return (
    <div className="page blog">
      <h2>Drone Technology Blog</h2>
      
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <button className="btn-read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
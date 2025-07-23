document.addEventListener("DOMContentLoaded", () => {
  fetchComments();

  const form = document.getElementById("comment-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comment = document.getElementById("comment").value.trim();

      if (name && email && comment) {
        postComment({ name, email, comment });
      }
    });
  }
});

// Load sample comments (can replace with actual API call)
function fetchComments() {
  const comments = [
    {
      name: "John Doe",
      date: "July 17, 2025",
      body: "Wonderful insights on balancing mind and body!"
    },
    {
      name: "Lisa Park",
      date: "July 17, 2025",
      body: "Loved the part about morning rituals—thanks!"
    }
  ];

  const commentList = document.getElementById("comment-list");

  if (commentList) {
    commentList.innerHTML = `
      <h2>Comments</h2>
      <div class="comments-grid"></div>
    `;

    const commentsGrid = commentList.querySelector(".comments-grid");

    comments.forEach(comment => {
      const div = document.createElement("div");
      div.className = "comment";
      div.innerHTML = `
        <p class="comment-author-info">${comment.name} - <span>${comment.date}</span></p>
        <p>${comment.body}</p>
      `;
      commentsGrid.appendChild(div);
    });
  }
}

// Post new comment dynamically
function postComment(newComment) {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const commentList = document.getElementById("comment-list");
  const commentsGrid = commentList.querySelector(".comments-grid");

  const div = document.createElement("div");
  div.className = "comment";
  div.innerHTML = `
    <p class="comment-author-info">${newComment.name} - <span>${formattedDate}</span></p>
    <p>${newComment.comment}</p>
  `;
  commentsGrid.appendChild(div);

  // Reset the form
  document.getElementById("comment-form").reset();
}

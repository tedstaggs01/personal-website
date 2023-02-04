const commentText = document.querySelector("#comment-text");
const postCommentButton = document.querySelector("#post-comment");
const editCommentButton = document.querySelector("#edit-comment");
const commentsList = document.querySelector("#comments-list");

let selectedComment = null;

postCommentButton.addEventListener("click", function () {
  const comment = commentText.value;
  if (!comment) {
    return;
  }

  if (selectedComment) {
    selectedComment.textContent = comment;
    commentText.value = "";
    selectedComment = null;
    postCommentButton.style.display = "inline-block";
    editCommentButton.style.display = "none";
  } else {
    const li = document.createElement("li");
    li.textContent = comment;
    commentsList.appendChild(li);
    commentText.value = "";

    li.addEventListener("click", function () {
      selectedComment = this;
      commentText.value = this.textContent;
      postCommentButton.style.display = "none";
      editCommentButton.style.display = "inline-block";
    });
  }
});

editCommentButton.addEventListener("click", function () {
  postCommentButton.click();
});

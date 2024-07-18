export function CommentBox(comm) {
    return(
        <div class="wrapper">
        <div class="image-container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                class="image"
                alt="Profile Image"
            />
        </div>
        <div class="content-container">
            <span class="name-text">{comm.name}</span>
            <span class="comment-text">{comm.comment}</span>
        </div>
    </div>
    )
}
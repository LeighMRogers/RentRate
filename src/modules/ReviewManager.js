const remoteURL = " http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reviews/${id}`).then(result => result.json())
  },
  getAll(userId) {
    return fetch(`${remoteURL}/reviews?userId=${userId}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/reviews/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newReview) {
    return fetch(`${remoteURL}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    }).then(data => data.json())
  },
  update(editedReviewId, editedReview) {
    return fetch(`${remoteURL}/reviews/${editedReviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReview)
    }).then(data => data.json());
  },
}
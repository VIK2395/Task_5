class Review {
  constructor({
    reviewId = 'Not provided',
    author = 'Not provided',
    comicsDescribed = 'Not provided',
    text = 'Not provided',
  }) {
    this.reviewId = reviewId;
    this.author = author;
    this.comicsDescribed = comicsDescribed;
    this.text = text;
    this.dateAdded = new Date();
  }
}

module.exports = Review;

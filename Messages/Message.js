class Message {
  /**
   * Creates a new message
   *
   * @param {String} message the message to be sent
   */
  constructor(message) {
    this.message = message;
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

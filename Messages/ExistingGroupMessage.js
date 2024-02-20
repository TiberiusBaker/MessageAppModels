class ExistingGroupMessage extends Message {
  constructor(message, groupId) {
    super(message);
    this.groupId = groupId;
  }

  setGroupId(groupId) {
    this.groupId = groupId;
  }

  getGroupId() {
    return this.groupId;
  }

  send() {
    console.log("Sending message to existing group");
    const message = this.getMessage();
    const groupId = this.getGroupId();
    const data = {
      message,
      groupId,
    };

    fetch("http://localhost:3000/send?existing=true", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}

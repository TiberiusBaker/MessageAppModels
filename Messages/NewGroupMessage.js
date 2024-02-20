class NewGroupMessage extends Message {
  constructor(message, groupName = "") {
    super(message);
    this.groupName = groupName;
  }

  setGroupName(groupName) {
    this.groupName = groupName;
  }

  getGroupName() {
    return this.groupName;
  }

  send() {
    console.log("Creating new group chat");
    const message = this.getMessage();
    const groupName = this.getGroupName();
    const data = {
      message,
      groupName,
    };

    fetch("http://localhost:3000/send?existing=false", {
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

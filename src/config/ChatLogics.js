export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name
}
export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0]
}

export const isSameSender = (
  messages,
  currMessage,
  currMessageIndex,
  LoggedInuserId,
) => {
  return (
    currMessageIndex < messages.length - 1 &&
    (messages[currMessageIndex + 1].sender._id !== currMessage.sender._id ||
      messages[currMessageIndex + 1].sender._id === undefined) &&
    messages[currMessageIndex].sender._id !== LoggedInuserId
  )
}

export const isLastMessage = (messages, currMessageIndex, LoggedInuserId) => {
  return (
    currMessageIndex === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== LoggedInuserId &&
    messages[messages.length - 1].sender._id
  )
}

export const isSameSenderMargin = (
  messages,
  currMessage,
  currMessageIndex,
  LoggedInuserId,
) => {
  if (
    currMessageIndex < messages.length - 1 &&
    messages[currMessageIndex + 1].sender._id === currMessage.sender._id &&
    messages[currMessageIndex].sender._id !== LoggedInuserId
  )
    return 33
  else if (
    (currMessageIndex < messages.length - 1 &&
      messages[currMessageIndex + 1].sender._id !== currMessage.sender._id &&
      messages[currMessageIndex].sender._id !== LoggedInuserId) ||
    (currMessageIndex === messages.length - 1 &&
      messages[currMessageIndex].sender._id !== LoggedInuserId)
  )
    return 0
  else return 'auto'
}

export const isSameUser = (messages, currMessage, currMessageIndex) => {
  return (
    currMessageIndex > 0 &&
    messages[currMessageIndex - 1].sender._id === currMessage.sender._id
  )
}

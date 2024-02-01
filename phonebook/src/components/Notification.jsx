const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  const notificationType = isError ? "error" : "notification"

  return (
    <div className={notificationType}>
      {message}
    </div>
  )
}

export default Notification
module.exports.getFormattedDateAndTime = (dateTime) => {
  return Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    hour12: false,
  })
    .format(dateTime)
    .split(" at ");
};

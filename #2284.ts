function largestWordCount(messages: string[], senders: string[]): string {
  const sendersMap = new Map<string, number>();

  senders.forEach((sender) => {
    sendersMap.set(sender, 0);
  });

  for (let i = 0; i < messages.length; i++) {
    sendersMap.set(
      senders[i],
      (sendersMap.get(senders[i]) ?? 0) + messages[i].split(" ").length
    );
  }

  const iterator = sendersMap.entries();
  const first = iterator.next().value;

  let [maxSender, maxCount] = first || ["", 0];

  for (const [sender, count] of iterator) {
    if (count > maxCount || (count === maxCount && sender > maxSender)) {
      maxCount = count;
      maxSender = sender;
    }
  }
  return maxSender;
}

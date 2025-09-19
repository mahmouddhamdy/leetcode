function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let current = head;
  while (current) {
    current = current?.next!;
    length++;
  }
  if (n === length) return head?.next as ListNode | null;
  let index = 0;
  current = head;
  while (index < length - n - 1) {
    current = current?.next!;
    index++;
  }
  let beforeToBeRemoved = current;

  beforeToBeRemoved!.next = beforeToBeRemoved?.next?.next!;

  return head;
}

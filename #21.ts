function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  let firstListIterator: ListNode | null = list1;
  let secondListIterator: ListNode | null = list2;
  let newList: ListNode = new ListNode(0);
  let newListIterator: ListNode = newList;
  while (firstListIterator !== null && secondListIterator !== null) {
    if (firstListIterator.val > secondListIterator.val) {
      newListIterator.next = secondListIterator;
      secondListIterator = secondListIterator.next;
    } else {
      newListIterator.next = firstListIterator;
      firstListIterator = firstListIterator.next;
    }
    newListIterator = newListIterator.next!;
  }
  newListIterator.next = firstListIterator ?? secondListIterator;
  return newList.next;
}

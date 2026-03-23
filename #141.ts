/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  const seen = new Set<ListNode>();
  let iterator = head;

  while (iterator !== null) {
    if (seen.has(iterator)) return true;
    seen.add(iterator);
    iterator = iterator.next;
  }

  return false;
}

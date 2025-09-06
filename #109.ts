class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function constructTreeFromArray(array: number[]): TreeNode | null {
  if (array.length === 0) return null;
  const arrayMedian = Math.floor(array.length / 2);
  const leftArray = array.slice(0, arrayMedian);
  const rightArray = array.slice(arrayMedian + 1);

  const treeNode = new TreeNode(array[arrayMedian]);
  treeNode.left = constructTreeFromArray(leftArray);
  treeNode.right = constructTreeFromArray(rightArray);
  return treeNode;
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null;

  const arrayFromLinkedList = [];

  let current = head;
  while (current !== null) {
    arrayFromLinkedList.push(current?.val);
    current = current?.next;
  }
  const tree = constructTreeFromArray(arrayFromLinkedList);
  return tree;
}

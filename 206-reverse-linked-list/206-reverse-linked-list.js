/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const values = []
    for(let i=head; i; i=i.next){
        console.log(i.val);
        values.push(i.val)
    }
    values.reverse();
    k=0
    for(let j=head; j; j=j.next){
        j.val = values[k];
        k++
    }
    return head;
};
#include <bits/stdc++.h>

class Node {
    public:
        int data;
        Node* next;

    Node()
    {
        data = 0;
        next = NULL;
    }

    Node(int val)
    {
        this -> data = val;
        this -> next = NULL;
    }
};

class LinkedList {
    Node* head;

    public:
        LinkedList() { head = NULL; }

        void append(int);
        void printList();
        void reverseList();
        Node* deleteNode(int);
};

void LinkedList::reverseList()
{
    if(head == NULL) return;

    Node* prev = NULL;
    Node* curr = head;
    
    while (curr != NULL)
    {
        Node* temp = curr -> next;
        curr -> next = prev;

        prev = curr;
        curr = temp;
    }
    head = prev;
    printList();
}

// Time: O(n) where n is the number of nodes
// Space: O(1) 
Node* LinkedList::deleteNode(int target) {
    Node* prev = NULL;
    Node* curr = head;

    if (head -> data == target) {
        head = head -> next;
    }

    while (curr != NULL) {
        if (curr -> data == target) {
            prev -> next = curr -> next;
        }
        prev = curr;
        curr = curr -> next;
    }
    return head;
};

void LinkedList::append(int data) {
    Node* newNode = new Node(data);

    if ( head == NULL ) {
        head = newNode;
        return;
    }

    Node* curr = head; 

    while ( curr -> next != NULL ) {
        curr = curr -> next;
    }

    curr -> next = newNode;
};

void LinkedList::printList() {
    Node* curr = head;

    while (curr != NULL) {
        std::cout << curr -> data << ' ';
        curr = curr -> next;
    }
}

int main() {
    LinkedList list;
    list.append(2);
    list.append(3);
    list.append(5);
    list.append(8);
    //list.printList();
    //Node* head = list.deleteNode(5);
    list.reverseList();
    //std::cout << head -> data << std::endl;
    return 0;
};
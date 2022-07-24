# Hash Tables
## Introduction
Hash table or hash map keys to value. Hash tables combine lookup, insert and delete operations.
Key -> hash function = result(hash value or hash) is an index of the key-value pair.
Hash tables operates like a dictionary that we can map to get from the hash to the desired data.

### Hash tables are made up of two parts:

**Object** - where data is stored. The array holds all the key-value entries in the table.

**Hash function(or mapping function)** - determines the index of our key-value pair.

### Trees vs Hashing
Trees are more useful when needing to extract data in a specific sequence. Hash tables are smarter choice for
randomly sorted data due to its key-value pair organization.

Hash tables can perform in constant time while trees *O(logn)*
In worst case hash tables cna be as low as *O(n)* and AVL tree would maintain *O(logn)* in worst case.

## Hash Function
**Arithmetic Modular:** Take the modular of the key with the list/array size: `index=key MOD tablesize`. So, the `index`
will always stay between `0` and `tableSize - 1`.

**Truncation:** Select part of the key as the index rather than the whole key. We can use a mod function for this operation
, although it does not need to be based on the array size.

**Folding:** Dividing the key into small chunks and applying  a different arithmetic strategy at each chunk.


## Hash table collisions
Sometimes we can generate the same index for more than one key. This is referred to as a **hash collision**.

Hash collisions are usually handled using four common strategies.

1. **Linear probing:** Skipping over an index that is already filled. This can be achieved by adding an offset value to an
already computed index. 
2. **Chaining:**  Each slot of our hash table holds a pointer to another data structure such as a linked list or a tree. 
Chaining allows us to hash multiple key-value pairs at the same index in constant time. Increases performance but costly
in terms of space.
3. **Resizing the Array or List:** We can set a threshold and once it is crossed, we can create a new table which is double
the size of the original then copy the elements from the previous table. This is costly operation a typical convention is 
to set the threshold at 0.6, meaning 60% of the table is filled, the resize operation need to take place.
4. **Double Hashing:** There are two hash functions. The second is used to provide an offset value in case the first function 
causes
a collision. `(firstHash(key) + i * secondHand(key)) % tableSize`

## Interview questions
- Implement insertion, delete, and search
- Check if arrays are disjointed
- Find Symmetric pair in an array
- Find two pairs such the a + b = c + d 
- Find two numbers that add up to "value"
- Remove duplicates from a Linked List using hash tables
- How to insert a new value to a hash key that is already occupied


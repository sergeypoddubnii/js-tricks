import React from 'react';
import Section from 'Components/section';
import CodeSyntax from 'Components/code-syntax';
import Thesis from 'Components/section/thesis/thesis';

const BinaryTree = () => {
	return (
		<Section title={'Binary Tree'}>
			<Thesis title='description'>
				<p>
					Binary Tree composed of nodes that are connected to one another in a specific way.
					Each node in a binary tree can have at most two children, which are referred to as the left child and the right child.
					The node that has no children is called a leaf node.
					The topmost node in a binary tree is known as the root node.
					All other nodes in the tree are either the left or right child of the root node or descendants of those nodes.
				</p>
			</Thesis>
			<CodeSyntax code={'// create node for binary tree\nclass TreeNode {\n  constructor(value) {\n    this.value = value;\n    this.left = undefined;\n    this.right = undefined;\n  }\n\n  addValue(value) {\n    if (value < this.value) {\n      this.addLeft(value);\n    } else {\n      this.addRight(value);\n    }\n  }\n\n  addLeft(value) {\n    if (this.left) {\n      // if we already have left value of current node\n      this.left.addValue(value);\n      return;\n    }\n\n    this.left = new TreeNode(value);\n  }\n\n  addRight(value) {\n    if (this.right) {\n      // if we already have right value of current node\n      this.right.addValue(value);\n      return;\n    }\n    this.right = new TreeNode(value);\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = undefined;\n  }\n\n  add(value) {\n    if (this.value === value) return; // remove identical values\n    if (this.root) {\n      // if have root node => add value to this node(right or left)\n      this.root.addValue(value);\n      return;\n    }\n    this.root = new TreeNode(value); // if root is empty add new node\n  }\n\n  findValue(value) {\n    let current = this.root; // we start search from root\n\n    while (true) {\n      if (current === undefined) {\n        // if out binary tree is empty we return undefined\n        return undefined;\n      }\n\n      if (current.value === value) {\n        // if we fint value we return it\n        return current;\n      }\n\n      if (value < current.value) {\n        // /going by binary free (left right)\n        current = current.left;\n      } else {\n        current = current.right;\n      }\n    }\n  }\n}\n\nconst tree = new BinaryTree();\n\ntree.add(29);\ntree.add(10);\ntree.add(31);\ntree.add(1);\ntree.add(33);\ntree.add(5);\ntree.add(50);\ntree.add(28);\ntree.add(32);\ntree.add(11);\ntree.add(100);\ntree.add(13);\n\nconsole.log("tree", JSON.stringify(tree, null, "  ")); // expected output: object with the shape of a binary tree\n\nconsole.log(tree.findValue(13)); // expected output: node with value: "13"\n'}/>
			<CodeSyntax code={'const nums = [1, 2, 4, 5, 7, 10, 11, 32, 44, 56];\n\nconst binarySearch = (numbers, target) => {\n  let left = 0;\n  let right = numbers.length;\n  let middle;\n  let count = 0;\n\n  while (left <= right) {\n    count++;\n    middle = Math.round((right - left) / 2) + left;\n\n    if (target === numbers[middle]) {\n      console.log(\"count\", count);\n      return middle;\n    } else if (target < numbers[middle]) {\n      right = middle - 1;\n    } else {\n      left = middle + 1;\n    }\n  }\n};\n\nconst num = binarySearch(nums, 32);\nconsole.log(\"index\", nums[num]);\n'}/>
		</Section>
	);
};

export default BinaryTree;

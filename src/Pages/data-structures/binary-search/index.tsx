import React from 'react';
import Section from 'Components/section';
import CodeSyntax from 'Components/code-syntax';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';

const BinarySearch = () => {
	return (
		<Section title={'Binary Search'}>
			<Thesis>
				<Code>Binary search</Code> work only for sorted data
			</Thesis>
			<CodeSyntax code={'const nums = [1, 2, 4, 5, 7, 10, 11, 32, 44, 56];\n\nconst binarySearch = (numbers, target) => {\n  let left = 0;\n  let right = numbers.length;\n  let middle;\n  let count = 0;\n\n  while (left <= right) {\n    count++;\n    middle = Math.round((right - left) / 2) + left;\n\n    if (target === numbers[middle]) {\n      console.log(\"count\", count);\n      return middle;\n    } else if (target < numbers[middle]) {\n      right = middle - 1;\n    } else {\n      left = middle + 1;\n    }\n  }\n};\n\nconst num = binarySearch(nums, 32);\nconsole.log(\"index\", nums[num]);\n'}/>
		</Section>
	);
};

export default BinarySearch;

import React from "react";

const TwoSumFollowUpEn = () => (
  <div id="follow-up">
    <h3>Follow-ups</h3>
    <ul className="follow-up-list">
      <li>
        <i>
          What do we need to change if the problem asks us to return two numbers
          instead of two indices?
        </i>
        <pre>
          <strong>Input:</strong> nums = [2,7,11,15], target = 9 <br />
          <strong>Output:</strong> [2,7]
        </pre>
        <p>
          In solution 1, we can return <code>{"{nums[i], nums[j]}"}</code>; in
          solution 2, we can use hashset to store the numbers and we don't need
          to store the indices; in solution 3, we don't need to create an
          additional array and we can directly sort the orginal array.
        </p>
      </li>
      <li>
        <i>What if the given array is a sorted array?</i>
        <p>
          We can still use solution 1 and solution 2, but solution 3 might be a
          better choice. The time complexity is linear and we don't need to use
          additional space.
        </p>
      </li>
      <li>
        <i>
          The original problem has exactly two numbers adding up to the target.
          If there are multiple pairs, how can we return all pairs? Assume that
          all the numbers in the given array are unique.
        </i>
        <pre>
          <strong>Input:</strong> nums = [1,2,3,4,5,6], target = 7 <br />
          <strong>Output:</strong> [[1,6],[2,5],[3,4]]
        </pre>
        <p>
          We don't need to break the loop early, and we can get all the pairs.
        </p>
        <ul>
          <li>
            <i>
              If there are duplicate numbers in the given array, how to return
              all distictive pairs?
            </i>
            <pre>
              <strong>Input:</strong> nums = [1,2,1,2,1,3,2,1,3], target = 4
              <br />
              <strong>Output:</strong> [[1,3],[2,2]]
            </pre>
            <p>
              One simple way is to use hashset to store the result, which is
              applicable to all solutions.
            </p>
          </li>
          <li>
            <i>How about returning the number of pairs?</i>
            <pre>
              <strong>Input:</strong> nums = [1,1,1,2,2], target = 3<br />
              <strong>Output:</strong> 6
            </pre>
            <p>
              We can use a hashmap to store the numbers together with the
              occurrences. After iterating the array we can get all the
              occurrences, then we can iterate through the hashmap to get the
              result.
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default TwoSumFollowUpEn;

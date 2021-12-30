import React from "react";

const TwoSumFollowUpZh = () => (
  <div className="follow-up">
    <h3>后续问题</h3>
    <ul className="follow-up-list">
      <li>
        <i>如果题目要求返回两个数而不是两个下标，我们需要做何更改？</i>
        <pre>
          <strong>输入：</strong> nums = [2,7,11,15], target = 9 <br />
          <strong>输出：</strong> [2,7]
        </pre>
        <p>
          在解法一中，我们可以返回<code>{"{nums[i], nums[j]}"}</code>；
          在解法二中，我们可以使用哈希集来存储数字，而不需要存储下标；
          在解法三中，我们不必新建一个额外的数组，可以直接对给定数组进行排序。
        </p>
      </li>
      <li>
        <i>如果给定的数组是有序数组会怎么样？</i>
        <p>
          我们依然可以使用解法一和解法二，不过解法三也许是最佳选项。
          时间复杂度是线性，并且不需要额外的空间。
        </p>
      </li>
      <li>
        <i>
          原先的问题中，恰好有两个数相加之和等于目标值。如果给定的数组中存在多对
          满足条件的数，我们如何返回所有的结果？假设给定的数组不包含重复的数字。
        </i>
        <pre>
          <strong>输入：</strong> nums = [1,2,3,4,5,6], target = 7 <br />
          <strong>输出：</strong> [[1,6],[2,5],[3,4]]
        </pre>
        <p>我们不需要提前中断循环，我们便可以得到所有的结果。</p>
        <ul>
          <li>
            <i>如果给定数组中含有重复的数字，如何使返回结果不重复？</i>
            <pre>
              <strong>输入：</strong> nums = [1,2,1,2,1,3,2,1,3], target = 4
              <br />
              <strong>输出：</strong> [[1,3],[2,2]]
            </pre>
            <p>一个简单的方法是使用哈希集来存储结果，适用于各种解法。</p>
          </li>
          <li>
            <i>如何统计给定数组中共有多少对满足条件的数？</i>
            <pre>
              <strong>输入：</strong> nums = [1,1,1,2,2], target = 3<br />
              <strong>输出：</strong> 6
            </pre>
            <p>
              我们可以用哈希图来记录数字和其出现的次数。在遍历完数组后，
              我们可以得到所有数字的出现次数。之后可以遍历哈希图来得到结果。
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default TwoSumFollowUpZh;

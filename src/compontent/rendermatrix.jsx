import React, { useState } from 'react';
import '../CSS/matrix.css';  // 导入样式文件

const RenderMatrix = ({ rows, cols, Matrix_G }) => {
  // 初始化矩阵，使用 Matrix_G 作为初始值
  const [matrix] = useState(Matrix_G || []);

  // 根据输入值动态调整 input 宽度
  const getInputSize = (value) => {
    const length = value.length + 1;
    return `${Math.max(30, length * 10)}px`;  // 防止宽度太小
  };

  return (
    <div className="matrix-container transparent-bk">
      <table className="matrix-table">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    style={{ width: getInputSize(cell) }}  // 动态调整宽度
                    className="matrix-cell"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderMatrix;

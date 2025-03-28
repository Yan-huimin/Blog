import React, { useState, useEffect } from 'react';
import '../CSS/matrix.css';  // 导入样式文件

const Matrix = ({ rows, cols, onMatrixChange, Matrix_G }) => {
  // 初始化矩阵，使用 Matrix_G 作为初始值
  const [matrix, setMatrix] = useState(Matrix_G || []);

  // 当 rows 或 cols 变化时，重新初始化矩阵
  useEffect(() => {
    const newMatrix = Array.from({ length: rows }, () => Array(cols).fill(''));
    setMatrix(newMatrix);  // 重新设置矩阵
  }, [rows, cols]);

  // 处理输入变化
  const handleInputChange = (row, col, value) => {
    setMatrix(prevMatrix => {
      const newMatrix = prevMatrix.map((r, i) =>
        i === row ? r.map((c, j) => (j === col ? value : c)) : r
      );
      // 只有在矩阵更新时调用 onMatrixChange
      onMatrixChange(newMatrix); 
      return newMatrix;
    });
  };

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
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
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

export default Matrix;

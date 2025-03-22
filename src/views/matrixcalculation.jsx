import React, { Component } from 'react';
import Matrix from '../compontent/matrix';
import Footer from '../compontent/footer';
import Mode from '../compontent/mode';
import NavBar from '../compontent/navbar';
import '../CSS/matrixcalculation.css';
import RenderMatrix from '../compontent/rendermatrix';

class MatrixCalculation extends Component {
    state = { 
        col_a: 3,
        row_a: 3,
        col_b: 3,
        row_b: 3,
        matrixA: [],
        matrixB: [],
        matrixRes: [],
        is_computing: false,
    };

    handleMatrixAChange = (matrixA) => {
        this.setState({ matrixA });
    };

    handleMatrixBChange = (matrixB) => {
        this.setState({ matrixB });
    };

    handleColAChangeColAdd = () => {
        this.setState((prevState) => ({ col_a: Math.min(prevState.col_a + 1, 10) }));
    };

    handleColAChangeColReduce = () => {
        this.setState((prevState) => ({ col_a: Math.max(prevState.col_a - 1, 1) }));
    };

    handleRowAChangeRowAdd = () => {
        this.setState((prevState) => ({ row_a: Math.min(prevState.row_a + 1, 10) }));
    };

    handleRowAChangeReduce = () => {
        this.setState((prevState) => ({ row_a: Math.max(prevState.row_a - 1, 1) }));
    };

    handleResetA = () => {
        this.setState({
            col_a: 3,
            row_a: 3,
        })
    }

    handleColBChangeColAdd = () => {
        this.setState((prevState) => ({ col_b: Math.min(prevState.col_b + 1, 10) }));
    };

    handleColBChangeColReduce = () => {
        this.setState((prevState) => ({ col_b: Math.max(prevState.col_b - 1, 1) }));
    };

    handleRowBChangeRowAdd = () => {
        this.setState((prevState) => ({ row_b: Math.min(prevState.row_b + 1, 10) }));
    };

    handleRowBChangeReduce = () => {
        this.setState((prevState) => ({ row_b: Math.max(prevState.row_b - 1, 1) }));
    };

    handleResetB = () => {
        this.setState({
            col_b: 3,
            row_b: 3,
        })
    }

    handleResetRes = () => {
        this.setState({
            matrixRes: [],
            is_computing: false,
        })
    }

    rendreMatrixRes = () => {
        return(
            <RenderMatrix cols={this.state.col_a} rows={this.state.row_a} Matrix_G={this.state.matrixRes} />
        );
    }

    handleMatrixAddition = () => {
        this.setState({ is_computing: false });
        const { matrixA, matrixB } = this.state;
        if(matrixA.length === 0 || matrixB.length === 0) {
            alert('矩阵 A 和 矩阵 B 不能为空！');   
            return;
        }
        if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
            alert('矩阵 A 和 矩阵 B 维度不匹配，无法相加！');
            return;
        }
    
        const resultMatrix = matrixA.map((row, i) =>
            row.map((val, j) => (Number(val) || 0) + (Number(matrixB[i][j]) || 0))
        );
    
        this.setState({ matrixRes: resultMatrix, is_computing: true });
    };

    handleMatrixReduce = () => {
        this.setState({ is_computing: false });
        const { matrixA, matrixB } = this.state;
        if(matrixA.length === 0 || matrixB.length === 0) {
            alert('矩阵 A 和 矩阵 B 不能为空！');   
            return;
        }
        if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
            alert('矩阵 A 和 矩阵 B 维度不匹配，无法相减！');
            return;
        }
    
        const resultMatrix = matrixA.map((row, i) =>
            row.map((val, j) => (Number(val) || 0) - (Number(matrixB[i][j]) || 0))
        );
    
        this.setState({ matrixRes: resultMatrix, is_computing: true });
    };

    handleMatrixMultiplication = () => {
        this.setState({ is_computing: false });
        const { matrixA, matrixB } = this.state;
        
        // 检查矩阵 A 和 B 是否为空
        if (matrixA.length === 0 || matrixB.length === 0) {
            alert('矩阵 A 和 矩阵 B 不能为空！');
            return;
        }
        
        // 检查矩阵乘法是否合法
        if (matrixA[0].length !== matrixB.length) {
            alert('矩阵 A 的列数必须等于矩阵 B 的行数，才能进行乘法！');
            return;
        }
    
        // 矩阵乘法运算
        const resultMatrix = matrixA.map((rowA) =>
            matrixB[0].map((_, colIndex) => 
                rowA.reduce((sum, val, rowIndex) => sum + (Number(val) || 0) * (Number(matrixB[rowIndex][colIndex]) || 0), 0)
            )
        );
    
        this.setState({ matrixRes: resultMatrix, is_computing: true });
    };

    handleMatrixTranspose = () => {
        this.setState({ is_computing: false });
        const { matrixA } = this.state;
    
        // 检查矩阵 A 是否为空
        if (matrixA.length === 0) {
            alert('矩阵 A 不能为空！');
            return;
        }
    
        // 矩阵转置运算
        const resultMatrix = matrixA[0].map((_, colIndex) => 
            matrixA.map(row => row[colIndex])
        );
    
        this.setState({ matrixRes: resultMatrix, is_computing: true });
    };
    
    handleMatrixInverse = () => {
        this.setState({ is_computing: false });
        const { matrixA } = this.state;
    
        // 检查矩阵 A 是否为空
        if (matrixA.length === 0 || matrixA.length !== matrixA[0].length) {
            alert('矩阵 A 必须是方阵且不能为空！');
            return;
        }
    
        const n = matrixA.length;
        const augmentedMatrix = matrixA.map((row, i) => [
            ...row, // 原矩阵的行
            ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)) // 对应位置为单位矩阵的行
        ]);
    
        // 高斯-约旦消元法
        for (let i = 0; i < n; i++) {
            // 寻找主元，确保主元不为0
            if (augmentedMatrix[i][i] === 0) {
                let swapRow = -1;
                for (let j = i + 1; j < n; j++) {
                    if (augmentedMatrix[j][i] !== 0) {
                        swapRow = j;
                        break;
                    }
                }
                if (swapRow === -1) {
                    alert('矩阵 A 不可逆，因为行列式为零！');
                    return;
                }
    
                // 交换当前行与 swapRow 行
                [augmentedMatrix[i], augmentedMatrix[swapRow]] = [augmentedMatrix[swapRow], augmentedMatrix[i]];
            }
    
            // 将主元所在行的元素标准化为 1
            const divisor = augmentedMatrix[i][i];
            for (let j = 0; j < 2 * n; j++) {
                augmentedMatrix[i][j] /= divisor;
            }
    
            // 消去主元所在列的其他元素
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    const factor = augmentedMatrix[j][i];
                    for (let k = 0; k < 2 * n; k++) {
                        augmentedMatrix[j][k] -= factor * augmentedMatrix[i][k];
                    }
                }
            }
        }
    
        // 提取逆矩阵部分（增广矩阵的右半部分）
        const resultMatrix = augmentedMatrix.map(row => row.slice(n));
    
        this.setState({ matrixRes: resultMatrix, is_computing: true });
    };

    handleMatrixRank = () => {
        this.setState({ is_computing: false });
        const { matrixA } = this.state;
    
        // 检查矩阵 A 是否为空
        if (matrixA.length === 0 || matrixA[0].length === 0) {
            alert('矩阵 A 不能为空！');
            return;
        }
    
        const m = matrixA.length;
        const n = matrixA[0].length;
    
        // 创建一个副本来避免修改原始矩阵
        const matrix = matrixA.map(row => [...row]);
    
        let rank = 0;
    
        for (let row = 0; row < m; row++) {
            // 找到非零的列
            if (matrix[row][rank] !== 0) {
                // 对这一行进行高斯消元
                for (let i = row + 1; i < m; i++) {
                    const factor = matrix[i][rank] / matrix[row][rank];
                    for (let j = rank; j < n; j++) {
                        matrix[i][j] -= matrix[row][j] * factor;
                    }
                }
                rank++;
            } else {
                // 如果当前列的元素为0，跳过该列
                let foundNonZero = false;
                for (let i = row + 1; i < m; i++) {
                    if (matrix[i][rank] !== 0) {
                        // 交换当前行和含有非零元素的行
                        [matrix[row], matrix[i]] = [matrix[i], matrix[row]];
                        foundNonZero = true;
                        break;
                    }
                }
    
                // 如果在当前列找不到非零元素，则跳过此列
                if (!foundNonZero) {
                    rank++;
                }
            }
        }
    
        // 将矩阵的秩转换为一个 1x1 的矩阵
        const rankMatrix = [[rank]];
    
        // 更新状态，将秩作为 1x1 矩阵存储在 matrixRes 中
        this.setState({ matrixRes: rankMatrix, is_computing: true });
    };
    
    


    render() { 
        return (
            <React.Fragment>
                <div className="container">
                    <NavBar/>
                    <div className="matrix-area">
                        {/* 传递动态大小 */}
                        <Matrix cols={this.state.col_a} rows={this.state.row_a} onMatrixChange={this.handleMatrixAChange} Matrix_G={this.state.matrixA} />
                        <Matrix cols={this.state.col_b} rows={this.state.row_b} onMatrixChange={this.handleMatrixBChange} Matrix_G={this.state.matrixB} />
                    </div>
                    <div className="btn-size-of-matrix">
                        <div className="matrix-a size-btn">
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleColAChangeColAdd}
                            >col+</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleColAChangeColReduce}
                            >col-</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleRowAChangeRowAdd}
                            >row+</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleRowAChangeReduce}
                            >row-</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleResetA}
                            >reset</button>
                        </div>
                        <div className="matrix-b size-btn">
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleColBChangeColAdd}
                            >col+</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleColBChangeColReduce}
                            >col-</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleRowBChangeRowAdd}
                            >row+</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleRowBChangeReduce}
                            >row-</button>
                            <button type="button" className="btn btn-outline-secondary col"
                                onClick={this.handleResetB}
                            >reset</button>
                        </div>
                    </div>
                    <div className="calculation-matrix">
                        <hr />
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixAddition}
                        >+</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixReduce}
                        >-</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixMultiplication}
                        >*</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixInverse}
                        >Inverse</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixTranspose}
                        >Transpose</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleMatrixRank}
                        >Rank</button>
                        <button type="button" class="btn btn-outline-success"
                            onClick={this.handleResetRes}
                        >ResetRes</button>
                    </div>

                    {this.state.is_computing && this.rendreMatrixRes()}

                    <Footer/>
                    <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
                </div>
            </React.Fragment>
        );
    }
}

export default MatrixCalculation;

/*
73. Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.


Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

/*
Ваша задача - пройти по матрице и, если элемент равен 0, установить все элементы в его строке и столбце в 0. Вы должны сделать это на месте.

Вот шаги, которые мы будем следовать:

1. Используйте первую строку и первый столбец для отслеживания того, должны ли вы установить всю строку или столбец в 0.
2. Пройдите по матрице и, если элемент равен 0, установите соответствующий элемент в первой строке и первом столбце в 0.
3. Пройдите по первой строке и первому столбцу, и если элемент равен 0, установите всю строку или столбец в 0.
4. Если первый элемент матрицы равен 0, установите всю первую строку в 0.
5. Если первый элемент в первом столбце равен 0, установите весь первый столбец в 0.

Your task is to go through the matrix and if an element is 0, set all elements in its row and column to 0. You must do this in place.

Here are the steps we will follow:

1. Use the first row and the first column to track whether you should set the entire row or column to 0.
2. Go through the matrix and if an element is 0, set the corresponding element in the first row and the first column to 0.
3. Go through the first row and the first column, and if an element is 0, set the entire row or column to 0.
4. If the first element of the matrix is 0, set the entire first row to 0.
5. If the first element in the first column is 0, set the entire first column to 0.
*/
function setZeroes(matrix) {
    // Инициализируем переменную для отслеживания, должен ли первый столбец быть установлен в 0
    // Initialize a variable to track whether the first column should be set to 0
    let isCol = false;
    let R = matrix.length;
    let C = matrix[0].length;

    for (let i = 0; i < R; i++) {
        // Если первый элемент в строке равен 0, устанавливаем isCol в true
        // If the first element in the row is 0, set isCol to true
        if (matrix[i][0] == 0) {
            isCol = true;
        }

        // Проходим по каждому элементу в строке, начиная со второго
        // Go through each element in the row, starting from the second
        for (let j = 1; j < C; j++) {
            // Если элемент равен 0, устанавливаем соответствующий элемент в первой строке и первом столбце в 0
            // If the element is 0, set the corresponding element in the first row and the first column to 0
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // Проходим по каждой строке, начиная со второй, и устанавливаем элементы в 0, если соответствующий элемент в первой строке или первом столбце равен 0
    // Go through each row, starting from the second, and set elements to 0 if the corresponding element in the first row or the first column is 0
    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Если первый элемент матрицы равен 0, устанавливаем всю первую строку в 0
    // If the first element of the matrix is 0, set the entire first row to 0
    if (matrix[0][0] == 0) {
        for (let j = 0; j < C; j++) {
            matrix[0][j] = 0;
        }
    }

    // Если isCol равен true, устанавливаем весь первый столбец в 0
    // If isCol is true, set the entire first column to 0
    if (isCol) {
        for (let i = 0; i < R; i++) {
            matrix[i][0] = 0;
        }
    }
}

/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    var sum = 0;
    var i = start;
    if (start % 2 != 0) i = i + 1;
    for (i; i <= end; i = i + 2) {
        sum = sum + i;
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let ema = 0;
    while (a > 0.1) {
        a = a / 2;
        ema++;
    }
    return ema;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 2;
    let l = message.length - 2;
    let n2 = message.substr(0, 2);
    do {
        n2 = n2 + '_' + message.substr(i + 1, 2);
        i += 3;
    } while (i < l);
    return n2;
}

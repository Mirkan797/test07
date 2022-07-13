//큰 값이 나오면 이전 값 중 더 작은 값은 전부다 삭제한다!
//즉, 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열이 되어야해요! 

function solution(number, k) {
    const stack = [];
    let count = 0;

    for (const item of number) {
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    while (count < k) {
        stack.pop();
        count += 1;
    }

    return stack.join("");
}
/*## HCG (휴먼 컨설팅 그룹) 온라인 테스트, 180분
1. ###### 문제 설명
   2016년은 아름다운 연도입니다. 아름다운 연도란, 연도를 구성하는 0부터 9까지의 숫자가 중복 없이 사용된 연도를 의미합니다. 즉, 2016년도는 2가 1번, 0이 1번, 1이 1번, 6이 1번씩 사용되었기 때문에 아름다운 연도라 부릅니다. 하지만 2344년도는 4가 2번씩 사용되었기 때문에 아름다운 연도라고 하지 않습니다. 
   아름다운 연도는 2015년도, 2016년도처럼 연속해서 존재하는 경우도 있지만, 특정 연도 이후로 굉장히 오랫동안 나오지 않을 때도 있습니다. 예를 들어, 1987년도 이후 처음 등장하는 아름다운 연도는 2013년도입니다. 특정 연도 P가 매개변수로 주어질 때, 해당 연도보다 큰 아름다운 연도 중 가장 작은 아름다운 연도를 return 하도록 solution 함수를 완성해주세요.
   ##### 제한사항
   - 연도 P : 1,000 이상 10,000 이하의 자연수
   ------
   ##### 입출력 예
   | P    | answer |
   | ---- | ------ |
   | 1987 | 2013   |
   | 2015 | 2016   |
   ##### 입출력 예 설명
   입출력 예 #1
   1987년 이후의 아름다운 연도중 가장 작은 아름다운 연도는 2013년도 입니다.
   입출력 예 #2
   2015년 이후의 아름다운 연도중 가장 작은 아름다운 연도는 2016년도 입니다.
2. ###### 문제 설명
   자연수가 들어있는 배열 arr가 매개변수로 주어질 때, 배열 안의 숫자들 중 한 번씩만 나타나는(즉, 중복되어 나타나지 않는) 숫자들만 오름차순으로 정렬하여 return 하도록 solution 함수를 완성해주세요. 만약 그러한 숫자가 없다면 배열에 -1을 채워서 return 하세요.
   ##### 제한사항
   - arr의 길이는 1 이상 10만 이하의 자연수입니다.
   - arr의 원소는 1 이상 10만 이하의 자연수입니다.
   ------
   ##### 입출력 예
   | arr                      | result |
   | ------------------------ | ------ |
   | [2, 1, 3, 3]             | [1, 2] |
   | [3, 4, 4, 2, 5, 2, 5, 5] | [3]    |
   | [3, 5, 3, 5, 7, 5, 7]    | [-1]   |
   ##### 입출력 예 설명
   입출력 예 #1
   [1, 2, 3, 3]에서 1, 2가 한번씩 나타나므로 오름차순 정렬하여 [1, 2]를 반환합니다.
   입출력 예 #2
   [3, 4, 4, 2, 5, 2, 5, 5]에서 3이 한번만 나타나므로 [3]을 반환합니다.
   입출력 예 #3
   [3, 5, 3, 5, 7, 5, 7]에서 한 번만 나타나는 숫자는 없으므로 [-1]을 반환합니다.
3. ###### 문제 설명
   자연수가 적힌 2 * N장의 카드묶음을 가지고 있습니다. 카드묶음에는 같은 숫자가 적힌 카드가 2장씩 포함되어 있습니다. 어느 날 카드 1장을 잃어버렸습니다. 2*N - 1 길이의 카드 배열(cards)이 입력으로 주어질 때 잃어버린 카드에 적힌 숫자를 return 하도록 solution 함수를 완성해 주세요.
   ##### 제한사항
   - 카드 개수 N : 1,000,000 이하의 자연수(단, 홀수로 주어집니다.)
   - 카드에 적혀 있는 숫자 범위 : 100,000,000 이하의 자연수
   ------
   ##### 입출력 예
   | cards                 | answer |
   | --------------------- | ------ |
   | [1, 3, 2, 2, 5, 5, 1] | 3      |
   ##### 입출력 예 설명
   입출력 예 #1
   1은 2개, 2는 2개, 5는 2개, 3은 1개가 들어있으므로 없어진 카드는 3이 적힌 카드입니다.
4. ###### 문제 설명
   자연수 n의 각 자리 숫자를 더하면 새로운 자연수 n' 을 만들 수 있습니다. 또 새로운 자연수 n'의 각 자릿수를 더하여 새로운 자연수 n''을 만들 수 있습니다. 이 과정을 계속 반복하면 최종적으로 한 자리 숫자를 만들 수 있습니다. 예를 들어
   - 456789의 각 자리 숫자를 더하면 4 + 5 + 6 + 7 + 8 + 9 = 39
   - 39는 3 + 9 = 12
   - 12는 1 + 2 = 3
   과 같이 반복하여 한 자리 숫자 3을 얻을 수 있습니다.
   자연수 n이 주어졌을 때 각 자릿수를 더하는 과정을 반복하여 한 자리 숫자를 만들어 반환하는 함수를 완성해 주세요.
   ##### 제한사항
   - n은 10이상 231 - 1 이하입니다.
   ------
   ##### 입출력 예
   | n      | result |
   | ------ | ------ |
   | 10     | 1      |
   | 456789 | 3      |
   ##### 입출력 예 설명
   입출력 예 #1
   1 + 0 = 1 이므로 1을 반환합니다.
   입출력 예 #2
   4 + 5 + 6 + 7 + 8 + 9 = 39
   3 + 9 = 12
   1 + 2 = 3 이므로 3을 반환합니다.
5. 개미수열은 다음과 같은 수열입니다. (이 수열은 소설 개미에서 소개되었기 때문에 **개미 수열**이라고 불립니다.)
   1, 11, 12, 1121, 122111 .....
   이 수열은 앞의 수의 연속된 같은 숫자를 묶어서 숫자와 그 개수를 읽는 방식으로 만들어집니다.
   - 1을 1이 한 개 혹은 11로 읽습니다.
   - 11을 1이 두 개 혹은 12로 읽습니다.
   - 12를 1이 한 개, 2가 한 개 혹은 1121로 읽습니다.
   - 1121을 1이 두 개, 2가 한 개, 1이 한 개 혹은 122111로 읽습니다.
   - 이와 같은 방법으로 계속해서 다음 수를 만들어 갑니다.
   입력으로 n 이 주어질 때 n번째 개미 수열을 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
   ##### 제한사항
   - n은 40이하의 자연수입니다.
   ------
   ##### 입출력 예
   | n    | result |
   | ---- | ------ |
   | 2    | 11     |
   | 5    | 122111 |
   ##### 입출력 예 설명
   입출력 예 #1
   1, 11 ...로 두 번째인 11을 반환합니다.
   입출력 예 #2
   1, 11, 12, 1121, 122111 ...로 다섯 번째인 122111을 반환합니다. */

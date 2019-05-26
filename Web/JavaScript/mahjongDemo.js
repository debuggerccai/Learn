/* 
	custom game of mahjong

	create at 2019.5.9, updating...
 */

const upperCaseNumber = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
function numberConvertToUppercase(num){
	return upperCaseNumber[num]
}

const group = ['条', '筒', '万', '风', '中', '发', '白']
function initialize(a, b, c){
	let sub = []

	const direction = ['东', '南', '西', '北']
	for (let i of a) {
		if (i === '条' || i === '筒' || i === '万') {
			for (j = 1; j < 10; j++){
				const obj = {
					type: i,
					name: numberConvertToUppercase(j - 1) + i 
				}
				sub.push(obj)
			}
		}
		else if (i === '中' || i === '发' || i === '白') {
			const obj = {
				type: i,
				name: i
			}
			sub.push(obj)
		}
		else {
			for (k of direction) {
				const obj = {
					type: i,
					name: k + i 
				}
				sub.push(obj)
			}
		}
	}

	return [...sub, ...sub, ...sub, ...sub].sort(() => { return Math.random() - 0.5})
}

var res = initialize(group)
var A = res.splice(0, res.length / 4),
	B = res.splice(0, res.length / 3),
	C = res.splice(0, res.length / 2),
	D = res.splice(0, res.length / 1)
console.log({
	a: A,
	b: B,
	c: C,
	d: D
})

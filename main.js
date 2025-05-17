const currentTimes = document.querySelectorAll('.time-tracker__card-time')
const previousTimes = document.querySelectorAll('.previous-time')
const timeframesBox = document.querySelectorAll('.timeframe')
const cards = document.querySelectorAll('.time-tracker__card')
const cardTitles = document.querySelectorAll('.time-tracker__card-category')
const timeframeBtns = document.querySelectorAll('.time-tracker__profile-btn')
let timeframe = '' || 'daily'

const app = () => {
	fetch('data.json')
		.then(res => res.json())
		.then(res => {
			for (let i = 0; i < cards.length; i++) {
				cardTitles[i].textContent = res[i].title
				currentTimes[i].textContent = `${res[i].timeframes[timeframe].current}hrs`
				previousTimes[i].textContent = `${res[i].timeframes[timeframe].previous}hrs`
				switch (timeframe) {
					case 'daily':
						timeframesBox[i].textContent = 'Yesterday'
						break
					case 'weekly':
						timeframesBox[i].textContent = 'Last Week'
						break
					case 'monthly':
						timeframesBox[i].textContent = 'Last Month'
						break

					default:
						break
				}
			}
		})
}

const setTimeframe = (e) => {
	timeframe = e.target.textContent
	app()
}




app()

timeframeBtns.forEach(btn => btn.addEventListener('click', setTimeframe))
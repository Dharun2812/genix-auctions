import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronRight, Heart } from 'tabler-icons-react'

const AuctionCard = ({ props }) => {
	const { imageUrl, title, minimumBid, currentBid, endDate, _id } = props
	const [liked, setLiked] = useState(false)
	const [timeRemaining, setTimeRemaining] = useState('')

	useEffect(() => {
		const calculateTimeRemaining = () => {
			const end = new Date(endDate)
			const now = new Date()
			const difference = end - now

			if (difference <= 0) {
				setTimeRemaining('Auction ended')
				return
			}

			const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
			const months = Math.floor(
				(difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
			)
			const weeks = Math.floor(
				(difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
			)
			const days = Math.floor(
				(difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
			)
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((difference % (1000 * 60)) / 1000)

			let remainingTimeStr = ''

			if (years > 0) remainingTimeStr += `${years}y `
			if (months > 0) remainingTimeStr += `${months}m `
			if (weeks > 0) remainingTimeStr += `${weeks}w `
			if (days > 0) remainingTimeStr += `${days}d `
			remainingTimeStr += `${hours}h ${minutes}m ${seconds}s`

			setTimeRemaining(remainingTimeStr.trim())
		}

		calculateTimeRemaining()
		const intervalId = setInterval(calculateTimeRemaining, 1000)

		return () => clearInterval(intervalId)
	}, [endDate])

	return (
		<div className="bg-white w-[18em]  h-[30em] rounded-lg shadow-gray-500 hover:border-2 border-blue-600 shadow-md p-4">
			<div className="relative">
				<img
					src={imageUrl}
					alt={title}
					className="w-[16em] shadow-md  h-[14em] rounded-t-lg"
				/>
				{liked ? (
					<button
						onClick={() => setLiked(false)}
						className="absolute top-2 right-2 border-2 rounded-full  text-red-500 hover:text-red-700">
						<Heart fill="#ff0000" />
					</button>
				) : (
					<button
						onClick={() => setLiked(true)}
						className="absolute border-2  rounded-full  text-black top-2 right-2 ">
						<Heart />
					</button>
				)}
			</div>
			<div className="text-green-500 font-semibold mt-2">Live Auction</div>
			<h3 className="text-xl font-bold">{title}</h3>
			<p className="text-gray-600">Minimum Bid: ${minimumBid}</p>
			<p className="text-gray-600">Current Bid: ${currentBid}</p>
			<p className="text-gray-600">Ends in: {timeRemaining}</p>
			<button className="mt-4 w-full flex align-middle items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
				<Link
					className="w-full flex align-middle items-center justify-center"
					href={`/auctions/${_id}`}>
					{' '}
					Bid now <ChevronRight />
				</Link>
			</button>
		</div>
	)
}

export default AuctionCard

import { ROUTES } from '@/routes'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { User } from 'tabler-icons-react'

const UserAvatar = ({ showLink = true }) => {
	const session = useSession()
	const [user, setUser] = useState(null)
	const [photoURL, sethotoURL] = useState({})
	useEffect(() => {
		if (session.data) {
			setUser(session.data.user)
			sethotoURL(
				`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${session.data.user.email}`
			)
		}
	}, [session])

	return user ? (
		showLink ? (
			<Link href={ROUTES.PROFILE}>
				<div className="flex rounded-full overflow-hidden items-center justify-center w-10 h-10 text-black hover:text-white hover:bg-slate-400/20 cursor-pointer">
					<Image
						alt={user?.name}
						width={40}
						height={40}
						src={photoURL}
						dangerouslyallowsvg="true"
					/>
				</div>
			</Link>
		) : (
			<div className="flex rounded-full overflow-hidden items-center justify-center w-10 h-10 text-black hover:text-white hover:bg-slate-400/20 cursor-pointer">
				<Image alt={user?.displayName} width={40} height={40} src={photoURL} />
			</div>
		)
	) : showLink ? (
		<div className="flex gap-x-5">
			<Link href={ROUTES.LOGIN}>
				<div className="flex  overflow-hidden items-center justify-center  h-10 text-blue-500 hover:text-white  cursor-pointer">
					Login
				</div>
			</Link>
			<Link href={ROUTES.SIGNGIN}>
				<div className="flex  overflow-hidden items-center justify-center  h-10 bg-blue-500 rounded-sm px-2 text-white hover:text-white  cursor-pointer">
					Get Started
				</div>
			</Link>
		</div>
	) : (
		<div className="flex rounded-full overflow-hidden items-center justify-center w-10 h-10 text-black hover:text-white hover:bg-slate-400/20 cursor-pointer">
			<User strokeWidth={3} stroke="currentColor" />
		</div>
	)
}

export default UserAvatar

import { UserProps } from '../types/user';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './User.module.css';

export function User({
	login,
	avatar_url,
	followers,
	following,
	location,
}: UserProps) {
	return (
		<div className={classes.user}>
			<img src={avatar_url} alt={login} />
			<h2>{login}</h2>
			<p className={classes.location}>
				<MdLocationPin />
				<span>{location}</span>
			</p>
			<div className={classes.stats}>
				<div>
					<p>Seguidores: </p>
					<p className={classes.number}>{followers}</p>
				</div>
				<div>
					<p>Seguindo: </p>
					<p className={classes.number}>{following}</p>
				</div>
			</div>
			<a
				href={`https://github.com/${login}?tab=repositories`}
				target="_blank"
			>
				Ver repositórios
			</a>
		</div>
	);
}

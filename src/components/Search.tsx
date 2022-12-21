type SearchProps = {
	loadUser: (userName: string) => Promise<void>;
};

import classes from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

export function Search({ loadUser }: SearchProps) {
	const [userName, setUserName] = useState<string>('');
	return (
		<div className={classes.search}>
			<h2>Busque por nome do usuário: </h2>
			<p>Conheça os melhores repositórios</p>
			<div className={classes.search_container}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Digite o nome do usuário"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	);
}

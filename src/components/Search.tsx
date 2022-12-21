import { BsSearch } from 'react-icons/bs';

export function Search() {
	return (
		<>
			<h2>Busque por nome do usuário: </h2>
			<p>Conheça os melhores repositórios</p>
			<div>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Digite o nome do usuário"
				/>
				<button>
					<BsSearch />
				</button>
			</div>
		</>
	);
}
